import React, { useState } from "react";
import opcoesPecas from "./opcoespecas";
import comarca from "./comarca";
import feriadosJuquia from "./feriados/juquia";
import feriadosMiracatu from "./feriados/miracatu";
import feriadosRegistro from "./feriados/registro";
import { Modal, Button } from "react-bootstrap";

const parseDateString = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day); // Mês é zero-indexed no objeto Date
};

const AlertModal = ({ show, onClose, message }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alerta</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CalcPrazo = () => {
  const [pecaProcessual, setPecaProcessual] = useState("");
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [comarcaSelecionada, setComarcaSelecionada] = useState("");
  const [outroPrazo, setOutroPrazo] = useState("");
  const [prazoEmDias, setPrazoEmDias] = useState(10); // Valor padrão de 10 dias

  const handleChangePeca = (event) => {
    setPecaProcessual(event.target.value);
    setOutroPrazo(""); // Limpa o prazo inserido pelo usuário ao selecionar uma opção de peça

    // Verificar se a peça selecionada é "Embargos de Declaração" para definir o prazo padrão de 10 dias
    const pecaSelecionada = opcoesPecas.find((opcao) => opcao.value === event.target.value);
    if (pecaSelecionada?.value === "Embargos de Declaração") {
      setPrazoEmDias(10);
    } else {
      setPrazoEmDias(15); // Caso contrário, definir o prazo padrão de 15 dias
    }
  };

  const handleChangeData = (event) => {
    setDataSelecionada(event.target.value);
  };

  const handleComarca = (event) => {
    setComarcaSelecionada(event.target.value);
  };

  const isHoliday = (date, holidays) => {
    const formattedDate = date.toISOString().slice(0, 10);
    return holidays[formattedDate] !== undefined;
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isBusinessDay = (date, holidays) => {
    return !isWeekend(date) && !isHoliday(date, holidays);
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const calculateDeadline = (initialDate, days, city) => {
    let feriados;
    switch (city) {
      case "Registro":
        feriados = feriadosRegistro;
        break;
      case "Miracatu":
        feriados = feriadosMiracatu;
        break;
      case "Juquiá":
        feriados = feriadosJuquia;
        break;
      default:
        setShowAlert(true);
        setAlertMessage("Por favor, selecione uma cidade válida.");
        return null;
    }

    const startDate = parseDateString(initialDate);
    let currentDate = new Date(startDate);
    let count = 0;
    let holidaysCount = 0;
    let weekendsCount = 0;

    while (count < days) {
      // Avançar para o próximo dia
      currentDate.setDate(currentDate.getDate() + 1);

      // Verificar se a data atual é dia útil (não é fim de semana nem feriado)
      if (isBusinessDay(currentDate, feriados)) {
        count++;
      } else {
        if (isWeekend(currentDate)) {
          weekendsCount++;
        } else {
          holidaysCount++;
        }
      }
    }

    // Formatar a data final para o retorno no formato "dd-mm-aaaa"
    const finalDate = formatDate(currentDate.toISOString().slice(0, 10));

    const totalDays = count + weekendsCount + holidaysCount;

    setShowAlert(true);
setAlertMessage(
  <>
    <p><strong>Data Inicial:</strong> {formatDate(dataSelecionada)}</p>
    <p><strong>Data Final:</strong> {finalDate}</p>
    <p><strong>Dias úteis:</strong> {count}</p>
    <p><strong>Finais de Semana:</strong> {weekendsCount}</p>
    <p><strong>Feriados:</strong> {holidaysCount}</p>
    <p><strong>Diferença Total:</strong> {totalDays} dias</p>
  </>
);
    return finalDate;
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar se a comarca selecionada é válida
    if (comarcaSelecionada === "") {
      setShowAlert(true);
      setAlertMessage("Por favor, selecione uma cidade válida.");
      return;
    }

    // Verificar se a data foi selecionada
    if (dataSelecionada === "") {
      setShowAlert(true);
      setAlertMessage("Por favor, selecione a data de publicação antes de calcular o prazo.");
      return;
    }

    // Verificar se a peça processual foi selecionada ou se o prazo manual foi preenchido
    let prazoFinal;
    if (pecaProcessual !== "") {
      // Usar o prazo definido na constante opcoesPecas
      const pecaSelecionada = opcoesPecas.find((opcao) => opcao.value === pecaProcessual);
      prazoFinal = calculateDeadline(dataSelecionada, pecaSelecionada.prazo, comarcaSelecionada);
    } else if (outroPrazo !== "") {
      // Usar o prazo manual inserido pelo usuário
      prazoFinal = calculateDeadline(dataSelecionada, parseInt(outroPrazo), comarcaSelecionada);
    } else {
      setShowAlert(true);
      setAlertMessage("Por favor, selecione uma peça processual ou insira o prazo manualmente.");
      return;
    }

    // Verificar se o prazo final é válido
    if (!prazoFinal) {
      setShowAlert(true);
      setAlertMessage("Não foi possível calcular o prazo final.");
      return;
    }
  };

  const cabimentoSelecionado = opcoesPecas.find((opcao) => opcao.value === pecaProcessual)?.cabimento;

  return (
    <>
      <AlertModal show={showAlert} onClose={handleAlertClose} message={alertMessage} />

      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label htmlFor="pecaProcessual" className="form-label">
            Peça Processual:
          </label>
          <select
            id="pecaProcessual"
            onChange={handleChangePeca}
            value={pecaProcessual}
            className="form-select"
          >
            {opcoesPecas.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.label}
              </option>
            ))}
          </select>
        </div>
        {pecaProcessual === "" && (
          <div className="mb-3">
            <label htmlFor="outroPrazo" className="form-label">
              Insira o prazo manualmente:
            </label>
            <input
              type="number"
              id="outroPrazo"
              onChange={(event) => setOutroPrazo(event.target.value)}
              value={outroPrazo}
              className="form-control"
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="comarca" className="form-label">
            Comarca:
          </label>
          <select
            id="comarca"
            onChange={handleComarca}
            value={comarcaSelecionada}
            className="form-select"
          >
            {comarca.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.label}
              </option>
            ))}
          </select>
        </div>
        {cabimentoSelecionado && (
          <div className="mb-3">
            <label className="form-label">Cabimento:</label>
            <p className="form-control-static">{cabimentoSelecionado}</p>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="dataSelecionada" className="form-label">
            Data de Publicação da Decisão Interlocutória, Sentença ou Acórdão:
          </label>
          <input
            type="date"
            id="dataSelecionada"
            onChange={handleChangeData}
            value={dataSelecionada}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Calcular Prazo
        </button>
      </form>
    </>
  );
};

export default CalcPrazo;

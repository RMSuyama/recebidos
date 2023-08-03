import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import moment from 'moment';

const CalcPrescricao = () => {
  const [dataNascimento, setDataNascimento] = useState("");
  const [dataFato, setDataFato] = useState("");
  const [dataDenuncia, setDataDenuncia] = useState("");
  const [dataSentenca, setDataSentenca] = useState("");
  const [penaMaxima, setPenaMaxima] = useState("");
  const [prescricao, setPrescricao] = useState("");
  const [cabimento, setCabimento] = useState("");

  const calcularPrescricao = (penaMaxima, dataNascimento, dataFato, dataDenuncia, dataSentenca) => {
    let prazoPrescricional;
    if (penaMaxima < 1) {
      prazoPrescricional = 3;
      setCabimento('Art. 109, VI - em 3 (três) anos, se o máximo da pena é inferior a 1 (um) ano.');
    } else if (penaMaxima <= 2) {
      prazoPrescricional = 4;
      setCabimento('Art. 109, V - em quatro anos, se o máximo da pena é igual a um ano ou, sendo superior, não excede a dois;');
    } else if (penaMaxima <= 4) {
      prazoPrescricional = 8;
      setCabimento('Art. 109, IV - em oito anos, se o máximo da pena é superior a dois anos e não excede a quatro;');
    } else if (penaMaxima <= 8) {
      prazoPrescricional = 12;
      setCabimento('Art. 109, III - em doze anos, se o máximo da pena é superior a quatro anos e não excede a oito;');
    } else if (penaMaxima <= 12) {
      prazoPrescricional = 16;
      setCabimento('Art. 109, II - em dezesseis anos, se o máximo da pena é superior a oito anos e não excede a doze;');
    } else {
      prazoPrescricional = 20;
      setCabimento('Art. 109, I - em vinte anos, se o máximo da pena é superior a doze;');
    }

    const idadeNaDataDoFato = moment(dataFato, "YYYY-MM-DD").diff(moment(dataNascimento, "YYYY-MM-DD"), 'years');
    const idadeNaDataDaDenuncia = dataDenuncia ? moment(dataDenuncia, "YYYY-MM-DD").diff(moment(dataNascimento, "YYYY-MM-DD"), 'years') : null;
    const idadeNaDataDaSentenca = dataSentenca ? moment(dataSentenca, "YYYY-MM-DD").diff(moment(dataNascimento, "YYYY-MM-DD"), 'years') : null;

    let temMenosDe21NaDataDoFato = idadeNaDataDoFato < 21;
    let temMaisDe70NoCursoDoProcesso = idadeNaDataDaDenuncia > 70 || (idadeNaDataDaSentenca && idadeNaDataDaSentenca > 70);
    let temPertoDe70NoCursoDoProcesso = idadeNaDataDaDenuncia >= 60 && idadeNaDataDaDenuncia < 70;

    if (temMenosDe21NaDataDoFato || temMaisDe70NoCursoDoProcesso || temPertoDe70NoCursoDoProcesso) {
      prazoPrescricional /= 2;
    }

    const prescricaoFato = moment(dataFato, "YYYY-MM-DD").add(prazoPrescricional, 'years').format("DD-MM-YYYY");
    const prescricaoDenuncia = dataDenuncia ? moment(dataDenuncia, "YYYY-MM-DD").add(prazoPrescricional, 'years').format("DD-MM-YYYY") : 'N/A';
    const prescricaoSentenca = dataSentenca ? moment(dataSentenca, "YYYY-MM-DD").add(prazoPrescricional, 'years').format("DD-MM-YYYY") : 'N/A';

    return { 
      prescricaoFato, 
      prescricaoDenuncia, 
      prescricaoSentenca, 
      temMenosDe21NaDataDoFato,
      temMaisDe70NoCursoDoProcesso,
      temPertoDe70NoCursoDoProcesso
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!dataNascimento || !dataFato || !penaMaxima) {
      alert("Por favor, preencha todos os campos necessários.");
      return;
    }

    setPrescricao(calcularPrescricao(penaMaxima, dataNascimento, dataFato, dataDenuncia, dataSentenca));
  };

  return (
    <div>
      <Form className='card p-5' onSubmit={handleSubmit}>
        <Form.Group controlId="dataNascimento">
          <Form.Label>Data de Nascimento:</Form.Label>
          <Form.Control type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="dataFato">
          <Form.Label>Data do Fato:</Form.Label>
          <Form.Control type="date" value={dataFato} onChange={(e) => setDataFato(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="dataDenuncia">
          <Form.Label>Data do Oferecimento da Denúncia (opcional):</Form.Label>
          <Form.Control type="date" value={dataDenuncia} onChange={(e) => setDataDenuncia(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="dataSentenca">
          <Form.Label>Data da Sentença (opcional):</Form.Label>
          <Form.Control type="date" value={dataSentenca} onChange={(e) => setDataSentenca(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="penaMaxima">
          <Form.Label>Pena Máxima Cominada (em anos):</Form.Label>
          <Form.Control type="number" value={penaMaxima} onChange={(e) => setPenaMaxima(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Calcular
        </Button>
      </Form>
      {prescricao && (
        <Alert variant="success" className="mt-3 p-5">
          <p>Fundamentação Jurídica: {cabimento}</p>
          <p>Tinha menos de 21 anos na data do fato: {prescricao.temMenosDe21NaDataDoFato ? 'Sim' : 'Não'}</p>
          <p>Tem mais de 70 anos no curso do processo: {prescricao.temMaisDe70NoCursoDoProcesso ? 'Sim' : 'Não'}</p>
          <p>Está perto de 70 anos (entre 60 e 69) no curso do processo: {prescricao.temPertoDe70NoCursoDoProcesso ? 'Sim' : 'Não'}</p>
          <p>Data de prescrição a partir da data do fato: {prescricao.prescricaoFato}</p>
          <p>Data de prescrição a partir da data do oferecimento da denúncia: {prescricao.prescricaoDenuncia}</p>
          <p>Data de prescrição a partir da data da sentença: {prescricao.prescricaoSentenca}</p>
        </Alert>
      )}
    </div>
  );
};

export default CalcPrescricao;

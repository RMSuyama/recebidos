import React, { useState } from 'react';

const FuncionarioForm = () => {
  const [nome, setNome] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [empregos, setEmpregos] = useState([{
    cargo: '',
    orgao: '',
    inicio: '',
    salarios: [{
      mes: '',
      ano: '',
      valor: ''
    }]
  }]);

  const [resultados, setResultados] = useState([]);


  const handleChangeEmprego = (i, event) => {
    const values = [...empregos];
    values[i][event.target.name] = event.target.value;
    setEmpregos(values);
  };

  const handleAddEmprego = () => {
    setEmpregos([...empregos, { cargo: '', orgao: '', inicio: '', salarios: [{ mes: '', ano: '', valor: '' }] }]);
  };

  const handleRemoveEmprego = (i) => {
    const values = [...empregos];
    values.splice(i, 1);
    setEmpregos(values);
  };

  const handleChangeSalario = (i, j, event) => {
    const empregoValues = [...empregos];
    empregoValues[i].salarios[j][event.target.name] = event.target.value;
    setEmpregos(empregoValues);
  };

  const handleAddSalario = (i) => {
    const values = [...empregos];
    values[i].salarios = [...values[i].salarios, { mes: '', ano: '', valor: '' }];
    setEmpregos(values);
  };

  const handleRemoveSalario = (i, j) => {
    const values = [...empregos];
    values[i].salarios.splice(j, 1);
    setEmpregos(values);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const calcularBeneficio = (salario, inicio, dataAtual) => {
        const msPorAno = 1000 * 60 * 60 * 24 * 365.25;
        const anosDeServico = (dataAtual - new Date(inicio)) / msPorAno;
    
        const quinquenios = Math.floor(anosDeServico / 5);
        const sextaPartes = Math.floor(anosDeServico / 20);
    
        const valorQuinquenio = salario * 0.05 * quinquenios;
        const valorSextaParte = salario * 0.167 * sextaPartes;
    
        const salarioComBeneficios = salario + valorQuinquenio + valorSextaParte;
    
        return {
          salario,
          quinquenios,
          valorQuinquenio,
          sextaPartes,
          valorSextaParte,
          salarioComBeneficios
        };
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const resultados = [];
        for (let emprego of empregos) {
          for (let salario of emprego.salarios) {
            const dataSalario = new Date(salario.data);
            const resultado = calcularBeneficio(salario.valor, emprego.inicio, dataSalario);
            resultados.push({
              ...resultado,
              data: salario.data,
              cargo: emprego.cargo,
              orgao: emprego.orgao
            });
          }
        }
        setResultados(resultados);
      };
    
    const resultados = [];
    for (let emprego of empregos) {
      for (let salario of emprego.salarios) {
        const dataSalario = new Date(salario.data);
        const resultado = calcularBeneficio(salario.valor, emprego.inicio, dataSalario);
        resultados.push({
          ...resultado,
          data: salario.data,
          cargo: emprego.cargo,
          orgao: emprego.orgao
        });
      }
    }
    setResultados(resultados);
  };

  return (
    <div className="container">
      <h5 className="mb-4 text-center">Formulário do Funcionário</h5>

      <div className="mb-3">
        <label htmlFor="nome" className="form-label">Nome:</label>
        <input type="text" name="nome" id="nome" className="form-control" value={nome} onChange={event => setNome(event.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="rg" className="form-label">RG:</label>
        <input type="text" name="rg" id="rg" className="form-control" value={rg} onChange={event => setRG(event.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="cpf" className="form-label">CPF:</label>
        <input type="text" name="cpf" id="cpf" className="form-control" value={cpf} onChange={event => setCPF(event.target.value)} />
      </div>

      {empregos.map((emprego, i) => (
        <div key={i} className="card mb-3">
          <div className="card-header">
            <h5 className="mb-0 text-center">Emprego {i + 1}</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor={`cargo-${i}`} className="form-label">Cargo:</label>
              <input type="text" name="cargo" id={`cargo-${i}`} className="form-control" value={emprego.cargo} onChange={event => handleChangeEmprego(i, event)} />
            </div>

            <div className="mb-3">
              <label htmlFor={`orgao-${i}`} className="form-label">Órgão:</label>
              <input type="text" name="orgao" id={`orgao-${i}`} className="form-control" value={emprego.orgao} onChange={event => handleChangeEmprego(i, event)} />
            </div>

            <div className="mb-3">
              <label htmlFor={`inicio-${i}`} className="form-label">Data de início:</label>
              <input type="date" name="inicio" id={`inicio-${i}`} className="form-control" value={emprego.inicio} onChange={event => handleChangeEmprego(i, event)} />
            </div>

            {emprego.salarios.map((salario, j) => (
              <div key={j} className="mb-3">
                <h5 className="mb-0 text-center">Salário {j + 1}</h5>

                <div className="mb-3">
                    <label htmlFor={`data-${i}-${j}`} className="form-label">Data:</label>
                    <input type="date" name="data" id={`data-${i}-${j}`} className="form-control" value={salario.data} onChange={event => handleChangeSalario(i, j, event)} />
                    </div>

                <div className="mb-3">
                  <label htmlFor={`valor-${i}-${j}`} className="form-label">Valor:</label>
                  <input type="number" name="valor" id={`valor-${i}-${j}`} className="form-control" value={salario.valor} onChange={event => handleChangeSalario(i, j, event)} />
                </div>

                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-primary mb-3" onClick={() => handleAddSalario(i)}>Adicionar um salário</button>
                  <button type="button" className="btn btn-danger mb-3" onClick={() => handleRemoveSalario(i, j)}>Remover este salário</button>
                </div>
              </div>
            ))}

          </div>
          <div className="card-footer text-right">
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-primary" onClick={handleAddEmprego}>Adicionar um emprego</button>
              <button type="button" className="btn btn-danger" onClick={() => handleRemoveEmprego(i)}>Remover este emprego</button>
            </div>
          </div>
        </div>
      ))}

      <button type="submit" className="btn btn-success">Enviar</button>
    </div>
  );
};

export default FuncionarioForm;
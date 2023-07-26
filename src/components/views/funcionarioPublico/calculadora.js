import React, { useState } from 'react';
import FuncionarioForm from './funcionárioForm';

const CalcularBeneficios = () => {
  const [salarioBase, setSalarioBase] = useState(0);
  const [anoInicioServico, setAnoInicioServico] = useState(0);
  const anoAtual = new Date().getFullYear();

  const anosDeServico = anoAtual - anoInicioServico;

  const unidadesQuinquenio = Math.floor(anosDeServico / 5);
  const valorQuinquenio = (salarioBase * 0.05 * unidadesQuinquenio);
  const salarioComQuinquenio = salarioBase + valorQuinquenio;

  const unidadesSextaParte = Math.floor(anosDeServico / 20);
  const valorSextaParte = unidadesSextaParte > 0 ? salarioComQuinquenio * 0.16 : 0;
  const salarioComSextaParte = salarioComQuinquenio + valorSextaParte;

  return (
    <div className="card p-5">
      <h1 className="card-title">Calcular Quinquênio e Sexta Parte</h1>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="salarioBase" className="form-label">Salário Base</label>
          <input
            type="number"
            id="salarioBase"
            className="form-control"
            value={salarioBase}
            onChange={(e) => setSalarioBase(Number(e.target.value))}
            placeholder="Digite o salário base"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="anoInicioServico" className="form-label">Ano de Início do Serviço</label>
          <input
            type="number"
            id="anoInicioServico"
            className="form-control"
            value={anoInicioServico}
            onChange={(e) => setAnoInicioServico(Number(e.target.value))}
            placeholder="Digite o ano de início do serviço"
          />
        </div>
        <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário base</td>
            <td>R$ {salarioBase}</td>
          </tr>
          <tr>
            <td>Anos de serviço</td>
            <td>{anosDeServico}</td>
          </tr>
          <tr>
            <td>Unidades Quinquênio</td>
            <td>{unidadesQuinquenio}</td>
          </tr>
          <tr>
            <td>Valor do Quinquênio</td>
            <td>R$ {valorQuinquenio}</td>
          </tr>
          <tr>
            <td>Salário com Quinquênio</td>
            <td>R$ {salarioComQuinquenio}</td>
          </tr>
          <tr>
            <td>Unidades Sexta Parte</td>
            <td>{unidadesSextaParte}</td>
          </tr>
          <tr>
            <td>Valor da Sexta Parte</td>
            <td>R$ {valorSextaParte}</td>
          </tr>
          <tr>
            <td>Salário com Sexta Parte</td>
            <td>R$ {salarioComSextaParte}</td>
          </tr>
        </tbody>
      </table>

      </div>



      <FuncionarioForm />

    </div>
  );
};

export default CalcularBeneficios;

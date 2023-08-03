import React, { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import ipcaData from '../../../ref/ipca.json';

const MonetAtual = () => {
  const [valorInicial, setValorInicial] = useState("");
  const [ano, setAno] = useState("");
  const [mes, setMes] = useState("");
  const [valorAtualizado, setValorAtualizado] = useState("");
  const [taxaInformada, setTaxaInformada] = useState(null);
  const [taxaRecente, setTaxaRecente] = useState(null);
  const meses = [
    "Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const getTaxaMaisRecente = () => {
    // Pega o ano e mês atuais
    const dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth(); // Meses são indexados a partir de 0

    while (anoAtual >= anos[0]) {
      while (mesAtual >= 0) {
        const taxaStr = ipcaData[anoAtual][meses[mesAtual]];

        if (taxaStr) {
          // Converte a taxa de string com formato brasileiro para número
          return parseFloat(taxaStr.replace(',', '.'));
        }

        mesAtual--;
      }

      anoAtual--;
      mesAtual = 11; // Se não encontramos uma taxa para o ano, vá para dezembro do ano anterior
    }

    alert('Não foi possível encontrar uma taxa IPCA recente.');
    return null;
  };



  const anos = Object.keys(ipcaData);

  useEffect(() => {
    if (valorInicial && ano && mes) {
      const taxaInformada = getTaxa(ano, mes);
      const taxaRecente = getTaxaMaisRecente();

      if (taxaInformada !== null && taxaRecente !== null) {
        setValorAtualizado(calcularAtualizacao(valorInicial, taxaInformada, taxaRecente));
        setTaxaInformada(taxaInformada);
        setTaxaRecente(taxaRecente);
      }
    }
  }, [valorInicial, ano, mes]);

  const getTaxa = (ano, mes) => {
    const taxaStr = ipcaData[ano][mes];

    if (!taxaStr) {
      alert('Taxa não encontrada para o ano e mês fornecidos.');
      return null;
    }

    // Converte a taxa de string com formato brasileiro para número
    const taxa = parseFloat(taxaStr.replace(',', '.'));

    return taxa;
  };

  const calcularAtualizacao = (valorInicial, taxaInformada, taxaRecente) => {
    const valorAtualizado = (valorInicial / taxaInformada) * taxaRecente;
    return valorAtualizado.toFixed(2);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!valorInicial || !ano || !mes) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  };

  return (
    <div>
      <Form className='card p-5' onSubmit={handleSubmit}>
        <Form.Group controlId="valorInicial">
          <Form.Label>Valor Inicial:</Form.Label>
          <Form.Control type="number" value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="ano">
          <Form.Label>Ano:</Form.Label>
          <Form.Control as="select" value={ano} onChange={(e) => setAno(e.target.value)}>
            <option disabled value="">Selecione um ano</option>
            {anos.map((ano, index) => <option key={index} value={ano}>{ano}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="mes">
          <Form.Label>Mês:</Form.Label>
          <Form.Control as="select" value={mes} onChange={(e) => setMes(e.target.value)}>
            <option disabled value="">Selecione um mês</option>
            {meses.map((mes, index) => <option key={index} value={mes}>{mes}</option>)}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Calcular
        </Button>
        </Form>
        {valorAtualizado && <Alert variant="success" className="mt-3 text-center">
  Valor Atualizado: {Number(valorAtualizado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<br/>
  Valor inicial: {Number(valorInicial).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | Taxa informada: {taxaInformada} | Taxa recente: {taxaRecente}
</Alert>}

    </div>
  );
};

export default MonetAtual;
import React, { useEffect, useState } from 'react';
import { firestore } from '../../../../config/firebase';
import EntradaPdf from './entradaPdf';

const RecebidoViews = () => {
  const [dados, setDados] = useState([]);
  const [ordem, setOrdem] = useState('crescente');
  const [campo, setCampo] = useState('descricao');
  const [mes, setMes] = useState('Todos');
  const [ano, setAno] = useState('Todos');

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const contaReceberRef = firestore.collection('ContasAReceber');
        let contaReceberSnapshot = await contaReceberRef.get();
        let contaReceberData = contaReceberSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          dataPagamento: new Date(doc.data().dataPagamento)
        }));

        // Convertendo o valor para número
        contaReceberData = contaReceberData.map(item => ({
          ...item,
          valor: parseFloat(item.valor),
        }));

        // Filtrando os dados baseado no mês e ano selecionados
        if (mes !== 'Todos') {
          contaReceberData = contaReceberData.filter(item => item.dataPagamento.getMonth() + 1 === parseInt(mes));
        }

        if (ano !== 'Todos') {
          contaReceberData = contaReceberData.filter(item => item.dataPagamento.getFullYear() === parseInt(ano));
        }

        // Ordenando os dados
        contaReceberData.sort((a, b) => {
          if (campo === 'valor' || campo === 'dataPagamento') {
            return ordem === 'crescente' ? a[campo] - b[campo] : b[campo] - a[campo];
          } else {
            return ordem === 'crescente' ? a[campo].localeCompare(b[campo]) : b[campo].localeCompare(a[campo]);
          }
        });

        setDados(contaReceberData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, [ordem, campo, mes, ano]);

  // Calcular a soma de todas as entradas
  const totalEntradas = dados.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <label>Ordenar por:</label>
          <select className="form-select" value={campo} onChange={(e) => setCampo(e.target.value)}>
            <option value="descricao">Descrição</option>
            <option value="valor">Valor</option>
            <option value="dataPagamento">Data de Pagamento</option>
          </select>
        </div>
        <div className="col">
          <label>Ordem:</label>
          <select className="form-select" value={ordem} onChange={(e) => setOrdem(e.target.value)}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </div>
        <div className="col">
          <label>Mês:</label>
          <select className="form-select" value={mes} onChange={(e) => setMes(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>
        <div className="col">
          <label>Ano:</label>
          <select className="form-select" value={ano} onChange={(e) => setAno(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Colaborador</th>
              <th scope="col">Descrição</th>
              <th scope="col">Valor</th>
              <th scope="col">Data de Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.colaborador}</td>
                <td>{item.descricao}</td>
                <td>R${item.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                <td>{item.dataPagamento.toISOString().substring(0, 10)}</td>
              </tr>
            ))}
            <tr>
              <th scope="row">Total</th>
              <td colSpan="2"></td>
              <td style={{backgroundColor:'lightgrey', fontWeight:'bold',}}>
                R${totalEntradas.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
              </td>
            </tr>
          </tbody>
        </table>
        <EntradaPdf dados={dados}/>
      </div>
    </div>
  );
};

export default RecebidoViews;

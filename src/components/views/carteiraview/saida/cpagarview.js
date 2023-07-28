import React, { useEffect, useState } from 'react';
import { firestore } from '../../../../config/firebase';

const CPagarView = () => {
  const [dados, setDados] = useState([]);
  const [ordem, setOrdem] = useState('crescente');
  const [campo, setCampo] = useState('descricao');
  const [mes, setMes] = useState('Todos');

  useEffect(() => {
    const fetchDados = async () => {
      try {
        let contaPagarRef = firestore.collection('ContasAPagar');

        if (mes !== 'Todos') {
          contaPagarRef = contaPagarRef.where('dataPagamento', '>=', new Date(2023, mes - 1, 1)).where('dataPagamento', '<', new Date(2023, mes, 1));
        }

        let contaPagarSnapshot;
        if (campo === 'valor') {
          contaPagarSnapshot = await contaPagarRef.orderBy(campo, ordem).get();
        } else {
          contaPagarSnapshot = await contaPagarRef.get();
        }

        const contaPagarData = contaPagarSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (campo !== 'valor') {
          contaPagarData.sort((a, b) => {
            const fieldA = a[campo].toLowerCase(), fieldB = b[campo].toLowerCase();
            if (ordem === 'crescente') {
              return fieldA < fieldB ? -1 : (fieldA > fieldB ? 1 : 0);
            } else {
              return fieldA > fieldB ? -1 : (fieldA < fieldB ? 1 : 0);
            }
          });
        }

        setDados(contaPagarData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, [ordem, campo, mes]);

  // Calcular a soma de todas as saídas
  const totalSaidas = dados.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className="table-responsive p-5">
      <div>
        <label>Ordenar por: </label>
        <select value={campo} onChange={(e) => setCampo(e.target.value)}>
          <option value="descricao">Descrição</option>
          <option value="valor">Valor</option>
        </select>
        <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </select>
        <label>Filtrar por mês: </label>
        <select value={mes} onChange={(e) => setMes(e.target.value)}>
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

          {/* Continue adicionando opções para todos os meses */}
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Data do Pagamento</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.descricao}</td>
              <td>R${item.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
              <td>{item.dataPagamento}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">Total</th>
            <td colSpan="2"></td>
            <td style={{backgroundColor:'lightgrey', fontWeight:'bold',}}>
              R${totalSaidas.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CPagarView;

import React, { useEffect, useState } from 'react';
import firebase from '../../../config/firebaseData';
import 'firebase/database';


const CarteiraView = () => {
  // const [dados, setDados] = useState([]);

  // useEffect(() => {
  //   // Referência para o nó (node) do Firebase que contém os dados da tabela
  //   const databaseRef = firebase.database().ref('caminho_da_tabela');

  //   // Puxa os dados do Firebase uma vez, quando o componente é montado
  //   databaseRef.once('value')
  //     .then((snapshot) => {
  //       // Converte o snapshot em uma matriz de objetos
  //       const data = snapshot.val();
  //       const dataArray = Object.entries(data || {}).map(([key, value]) => ({ id: key, ...value }));
  //       setDados(dataArray);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao puxar os dados do Firebase:', error);
  //     });
  // }, []);

  return (
    <table className="table">
      {/* <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.handle}</td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};


export default CarteiraView;

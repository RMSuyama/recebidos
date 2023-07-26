import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firebase';

const TableColaboradores = () => {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    // Fetch all collaborators from Firestore when the component mounts
    const fetchColaboradores = async () => {
      try {
        const colaboradoresRef = firestore.collection('Colaboradores');
        const colaboradoresSnapshot = await colaboradoresRef.get();
        const colaboradoresData = colaboradoresSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setColaboradores(colaboradoresData);
      } catch (error) {
        console.error('Error fetching collaborators:', error);
      }
    };

    fetchColaboradores();
  }, []);

  return (
    <div className="table-responsive card p-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nome}</td>
              <td>{colaborador.email}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableColaboradores;

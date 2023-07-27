import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../../config/firebase';

const ListarColaboradores = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch all collaborators from Firestore
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredColaboradores = colaboradores.filter((colaborador) =>
    colaborador.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="card p-4">
      <h6>LISTA DE COLABORADORES</h6>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar colaborador por nome"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <ul className="list-group">
        {filteredColaboradores.map((colaborador) => (
          <li key={colaborador.id} className="list-group-item d-flex justify-content-between align-items-center">
            {colaborador.nome}
            <Link to={`/editar-colaborador/${colaborador.id}`} className="btn-sm btn-outline-secondary">
              Editar
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarColaboradores;

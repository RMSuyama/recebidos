import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { firestore } from '../../../config/firebase';

const EditarColaborador = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [colaborador, setColaborador] = useState(null);

  useEffect(() => {
    const fetchColaborador = async () => {
      try {
        const colaboradorRef = firestore.collection('Colaboradores').doc(id);
        const colaboradorData = await colaboradorRef.get();

        if (colaboradorData.exists) {
          setColaborador(colaboradorData.data());
        } else {
          console.error('No such collaborator!');
        }
      } catch (error) {
        console.error('Error fetching collaborator:', error);
      }
    };

    fetchColaborador();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColaborador((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const colaboradorRef = firestore.collection('Colaboradores').doc(id);
      await colaboradorRef.update(colaborador);
      navigate('/colaboradores'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error updating collaborator:', error);
    }
  };

  return (
    colaborador && (
      <div className="card p-5">
        <h6>EDITAR COLABORADOR</h6>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={colaborador.nome}
            onChange={handleChange}
            placeholder="Nome"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            value={colaborador.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
          <input
            type="text"
            className="form-control"
            name="cargo"
            value={colaborador.cargo}
            onChange={handleChange}
            placeholder="Cargo"
          />
          <input
            type="text"
            className="form-control"
            name="telefone"
            value={colaborador.telefone}
            onChange={handleChange}
            placeholder="Telefone"
          />
          <button type="submit" className="btn btn-outline-danger">
            Salvar
          </button>
        </form>
      </div>
    )
  );
};

export default EditarColaborador;

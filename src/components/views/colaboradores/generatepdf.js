import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firebase';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Tablepdf = () => {
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

  const generatePDF = () => {
    const doc = new jsPDF();


    const title = 'Relatório de Colaboradores';
    const fontSize = 14;
    doc.setFontSize(fontSize);
    const txtWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const xOffset = (doc.internal.pageSize.getWidth() - txtWidth) / 2;
  
    doc.setFont('helvetica', 'bold');
    doc.text(title, xOffset, 10);
  

    autoTable(doc, {

      head: [['Nome', 'E-mail', 'Cargo', 'Telefone']],
      body: colaboradores.map((colaborador) => [
        colaborador.nome,
        colaborador.email,
        colaborador.cargo,
        colaborador.telefone,
      ]),
    });
    doc.save('colaboradores.pdf');
  };

  return (
    <div className="table-responsive card p-5">
      <button onClick={generatePDF} className="btn btn-danger mb-4">
        Gerar PDF
      </button>
    </div>
  );
};

export default Tablepdf;

import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import ProcuracaoView from './procuracaoView';

function MyComponent() {
  const myComponentRef = useRef();

  const generatePDF = () => {
    const opt = {
      margin: [0.25,0.75,0.5,0.75],
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(myComponentRef.current).save();
  }

  return (
    <div className='card social-card p-5'>
      <button onClick={generatePDF} className='btn btn-outline-danger'>
        Gerar PDF
      </button>
      <div ref={myComponentRef}>
        <ProcuracaoView />  
      </div>
    </div>
  );
}

export default MyComponent;

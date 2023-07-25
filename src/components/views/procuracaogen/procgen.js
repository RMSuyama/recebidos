import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import ProcuracaoView from './proc';

function MyComponent() {
  const myComponentRef = useRef();

  const generatePDF = () => {
    const opt = {
      margin: [0.5,0.5,0.5,0.5],
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(myComponentRef.current).save();
  }

  return (
    <div>
              <button onclick={generatePDF} className="btn btn-outline-danger">Gerar Procuração</button>

      <button onClick={generatePDF} className='btn btn-danger'>
        Gerar PDF
      </button>
      <div ref={myComponentRef}>
        <ProcuracaoView />  
      </div>
    </div>
  );
}

export default MyComponent;

import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const EntradaPdf = ({ dados }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Adicionar título
    const title = 'Relatório de Recebimentos';
    const fontSize = 14;
    doc.setFontSize(fontSize);
    const txtWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const xOffset = (doc.internal.pageSize.getWidth() - txtWidth) / 2;
    doc.setFont('helvetica', 'bold');
    doc.text(title, xOffset, 10);

    // Calcular a soma de todas as entradas
    const totalEntradas = dados.reduce((acc, item) => acc + item.valor, 0);

    // Adicionar tabela
    autoTable(doc, {
      head: [['#', 'Colaborador', 'Descrição', 'Data de Pagamento', 'Valor']],
      body: [
        ...dados.map((item) => [
          item.id,
          item.colaborador,
          item.descricao,
          item.dataPagamento.toISOString().substring(0, 10),
          `R$${item.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
        ]),
        // Adicionar linha com o total de entradas no final da tabela
        ['Total', '', '', '', `R$${totalEntradas.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`]
      ],
    });

    doc.save('recebimentos.pdf');
  };

  return (
    <div className="table-responsive card p-4">
      <button onClick={generatePDF} className="btn btn-danger mb-4">
        Gerar PDF
      </button>
    </div>
  );
};

export default EntradaPdf;

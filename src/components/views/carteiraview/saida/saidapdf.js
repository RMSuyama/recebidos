import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const SaidaPdf = ({ dados }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Adicionar título
    const title = 'Relatório de Saídas';
    const fontSize = 14;
    doc.setFontSize(fontSize);
    const txtWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const xOffset = (doc.internal.pageSize.getWidth() - txtWidth) / 2;
    doc.setFont('helvetica', 'bold');
    doc.text(title, xOffset, 10);

    // Calcular a soma de todas as saídas
    const totalSaidas = dados.reduce((acc, item) => acc + item.valor, 0);

    // Adicionar tabela
    autoTable(doc, {
      head: [['Id', 'Descrição', 'Valor', 'Data de Pagamento']],
      body: [
        ...dados.map((item) => [
          item.id,
          item.descricao,
          `R$${item.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
          item.dataPagamento.toISOString().substring(0, 10)
        ]),
        // Adicionar linha com o total de saídas no final da tabela
        ['Total', '', `R$${totalSaidas.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, '']
      ],
    });

    doc.save('saida.pdf');
  };

  return (
    <div className="table-responsive card p-5">
      <button onClick={generatePDF} className="btn btn-danger mb-4">
        Gerar PDF com Relação de Saídas
      </button>
    </div>
  );
};

export default SaidaPdf;

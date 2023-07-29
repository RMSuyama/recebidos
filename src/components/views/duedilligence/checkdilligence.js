import React from 'react';

const documentos = [
    { nome: 'CERTIDÃO DE DADOS CADASTRAIS CONSTANDO VALOR VENAL ', tipo: 'IMÓVEL' },
    { nome: 'CERTIDÃO DE INEXISTÊNCIA DE MULTAS EXPEDIDAS PELA PREFEITURA ', tipo: 'IMÓVEL' },
    { nome: 'CERTIDÃO DE MATRÍCULA VINTENÁRIA COM NEGATIVA DE ÔNUS EXPEDIDA NO PRAZO DE 30 DIAS', tipo: 'IMÓVEL' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS DE IPTU EXPEDIDA PELA PREFEITURA DE BARUERI', tipo: 'IMÓVEL' },
    { nome: 'CERTIDÃO DE CARTÓRIO DE TÍTULOS E REGISTROS DE EMPRESAS', tipo: 'PESSOA FÍSICA' },
    { nome: 'CERTIDÃO DE DISTRIBUIÇÕES DE AÇÕES - MPF', tipo: 'PESSOA FÍSICA' },
    { nome: 'CERTIDÃO DE EXECUÇÃO CRIMINAL - SAJ', tipo: 'PESSOA FÍSICA' },
    { nome: 'CERTIDÃO DE EXECUÇÃO CRIMINAL - SIVEC', tipo: 'PESSOA FÍSICA' },
    { nome: 'CERTIDÃO DE PROCEDIMENTOS INVESTIGATÓRIOS E INQUÉRITOS MP-SP - CIVEL', tipo: 'PESSOA FÍSICA' },
    { nome: 'CERTIDÃO DE PROCEDIMENTOS INVESTIGATÓRIOS E INQUÉRITOS MP-SP - CRIMINAL', tipo: 'PESSOA FÍSICA' },
    { nome: 'CERTIDÃO JUCESP ', tipo: 'PESSOA FÍSICA' },
    { nome: 'NEGATIVA DE EXISTÊNCIA DE ESCRITURA DO IMÓVEL LAVRADA NA COMARCA', tipo: 'PESSOA FÍSICA' },
    { nome: 'CARTÃO CNPJ', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO DE AÇÃO TRABALHISTA EM TRAMITAÇÃO', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO DE BAIXA DE EMPRESA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO DE DISTRIBUIÇÕES DE AÇÕES DA JUSTIÇA FEDERAL - 1º INSTÂNCIA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO DE DISTRIBUIÇÕES DE AÇÕES DA JUSTIÇA FEDERAL - 2º INSTÂNCIA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO DE PROCEDIMENTOS INVESTIGATÓRIOS E INQUÉRITOS MP-SP', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO DE PROTESTOS - 5 ANOS', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO ESTADUAL DE DISTRIBUIÇÃO CÍVEL EM GERAL - MAIS DE 10 ANOS', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO ESTADUAL DE DISTRIBUIÇÃO DE AÇÕES CRIMINAIS', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS AMBIENTAIS ESTADUAL - CETESB', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS AMBIENTAIS FEDERAIS - IBAMA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS ESTADUAIS INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS ESTADUAIS NÃO INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS FEDERAIS INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS MUNICIPAIS NÃO INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS TRABALHISTAS', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIFICADO DE IRREGULARIDADE DE FGTS', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'CERTIFICADO DE REGULARIDADE DE FGTS', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'FICHA DE BREVE RELATO EXPEDIDA PELA JUCESP', tipo: 'PESSOA FÍSICA E PJ' },
    { nome: 'QUADRO SOCIETÁRIO ATUALIZADO PELA RFB', tipo: 'PESSOA FÍSICA E PJ' },
 
];

const CheckDillig = () => {
  return (
    <div className="container p-5">
      <h2>Checklist de Dilligence</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Documentos</h5>
          <div className="list-group">
            {documentos.map((documento, i) => (
              <a key={i} href="#" className="list-group-item list-group-item-action">
                {documento.nome} - {documento.tipo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckDillig;

import React from 'react';

const documentos = [
  { nome: 'CERTIDÃO DE DADOS CADASTRAIS CONSTANDO VALOR VENAL  ', tipo: 'IMÓVEL', link: "link" },
  { nome: 'CERTIDÃO DE INEXISTÊNCIA DE MULTAS EXPEDIDAS PELA PREFEITURA ', tipo: 'IMÓVEL', link: "link" },
  { nome: 'CERTIDÃO DE MATRÍCULA VINTENÁRIA COM NEGATIVA DE ÔNUS EXPEDIDA NO PRAZO DE 30 DIAS', tipo: 'IMÓVEL', link: "link" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS DE IPTU EXPEDIDA PELA PREFEITURA DE BARUERI', tipo: 'IMÓVEL', link: "link" },
  { nome: 'CERTIDÃO DE CARTÓRIO DE TÍTULOS E REGISTROS DE EMPRESAS', tipo: 'PESSOA FÍSICA', link: "link" },
  { nome: 'CERTIDÃO DE DISTRIBUIÇÕES DE AÇÕES - MPF', tipo: 'PESSOA FÍSICA', link: "https://aplicativos.mpf.mp.br/ouvidoria/app/cidadao/certidao" },
  { nome: 'CERTIDÃO DE EXECUÇÃO CRIMINAL - SAJ', tipo: 'PESSOA FÍSICA', link: "https://esaj.tjsp.jus.br/sco/abrirCadastro.do" },
  { nome: 'CERTIDÃO DE EXECUÇÃO CRIMINAL - SIVEC', tipo: 'PESSOA FÍSICA', link: "https://esaj.tjsp.jus.br/sco/abrirCadastro.do" },
  { nome: 'CERTIDÃO DE PROCEDIMENTOS INVESTIGATÓRIOS E INQUÉRITOS MP-SP - CIVEL', tipo: 'PESSOA FÍSICA E PJ', link: "https://www.mpsp.mp.br/certidoes" },
  { nome: 'CERTIDÃO DE PROCEDIMENTOS INVESTIGATÓRIOS E INQUÉRITOS MP-SP - CRIMINAL', tipo: 'PESSOA FÍSICA E PJ', link: "https://www.mpsp.mp.br/certidoes" },
  { nome: 'CERTIDÃO JUCESP ', tipo: 'PESSOA FÍSICA', link: "https://www.jucesponline.sp.gov.br/" },
  { nome: 'NEGATIVA DE EXISTÊNCIA DE ESCRITURA DO IMÓVEL LAVRADA NA COMARCA', tipo: 'PESSOA FÍSICA', link: "link" },
  { nome: 'CARTÃO CNPJ', tipo: 'PESSOA FÍSICA E PJ', link: "link" },
  { nome: 'CERTIDÃO DE AÇÃO TRABALHISTA EM TRAMITAÇÃO', tipo: 'PESSOA FÍSICA E PJ', link: "https://trt15.jus.br/servicos/certidoes/certidao-eletronica-de-acoes-trabalhistas-ceat" },
  { nome: 'CERTIDÃO DE BAIXA DE EMPRESA', tipo: 'PESSOA FÍSICA E PJ', link: "link" },
  { nome: 'CERTIDÃO DE DISTRIBUIÇÕES DE AÇÕES DA JUSTIÇA FEDERAL - 1º INSTÂNCIA', tipo: 'PESSOA FÍSICA E PJ', link: "https://web.trf3.jus.br/certidao-regional/CertidaoCivelEleitoralCriminal/SolicitarDadosCertidao" },
  { nome: 'CERTIDÃO DE DISTRIBUIÇÕES DE AÇÕES DA JUSTIÇA FEDERAL - 2º INSTÂNCIA', tipo: 'PESSOA FÍSICA E PJ', link: "https://web.trf3.jus.br/certidao-regional/CertidaoCivelEleitoralCriminal/SolicitarDadosCertidao" },
  { nome: 'CERTIDÃO DE PROTESTOS - 5 ANOS', tipo: 'PESSOA FÍSICA E PJ', link: "link" },
  { nome: 'CERTIDÃO ESTADUAL DE DISTRIBUIÇÃO CÍVEL EM GERAL - MAIS DE 10 ANOS', tipo: 'PESSOA FÍSICA E PJ', link: "https://esaj.tjsp.jus.br/sco/abrirCadastro.do" },
  { nome: 'CERTIDÃO ESTADUAL DE DISTRIBUIÇÃO DE AÇÕES CRIMINAIS', tipo: 'PESSOA FÍSICA E PJ', link: "https://esaj.tjsp.jus.br/sco/abrirCadastro.do" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS AMBIENTAIS ESTADUAL - CETESB', tipo: 'PESSOA FÍSICA E PJ', link: "https://cetesb.sp.gov.br/certidoes-negativas/" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS AMBIENTAIS FEDERAIS - IBAMA', tipo: 'PESSOA FÍSICA E PJ', link: "https://servicos.ibama.gov.br/sicafiext/" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS ESTADUAIS INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ', link: "https://portal.fazenda.sp.gov.br/servicos/certidoes/Paginas/PaginaGuiaDoUsuario.aspx" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS ESTADUAIS NÃO INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ', link: "https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS FEDERAIS INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ', link: "https://solucoes.receita.fazenda.gov.br/servicos/certidaointernet/pj/emitir" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS MUNICIPAIS NÃO INSCRITOS NA DÍVIDA ATIVA', tipo: 'PESSOA FÍSICA E PJ', link: "link" },
  { nome: 'CERTIDÃO NEGATIVA DE DÉBITOS TRABALHISTAS', tipo: 'PESSOA FÍSICA E PJ', link: "https://www.tst.jus.br/certidao1" },
  { nome: 'CERTIFICADO DE IRREGULARIDADE DE FGTS', tipo: 'PESSOA FÍSICA E PJ', link: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf" },
  { nome: 'CERTIFICADO DE REGULARIDADE DE FGTS', tipo: 'PESSOA FÍSICA E PJ', link: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf" },
  { nome: 'FICHA DE BREVE RELATO EXPEDIDA PELA JUCESP', tipo: 'PESSOA FÍSICA E PJ', link: "https://www.jucesponline.sp.gov.br/login.aspx?ReturnUrl=%2fRestricted%2fGeraDocumento.aspx%3ftipoDocumento%3d7%26idHistoricoBusca%3dNu%252blsHcoFxeC%252bdOqKNUN8A%253d%253d&tipoDocumento=7&idHistoricoBusca=Nu%2blsHcoFxeC%2bdOqKNUN8A%3d%3d" },
  { nome: 'QUADRO SOCIETÁRIO ATUALIZADO PELA RFB', tipo: 'PESSOA FÍSICA E PJ', link: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj=" },
  { nome: '', tipo: '', link: "" },
  
  
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
              <a key={i} href={documento.link} className="list-group-item list-group-item-action">
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
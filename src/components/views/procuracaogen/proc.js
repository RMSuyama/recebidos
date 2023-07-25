import React from 'react';
const ProcuracaoView = () => {
  
    const procTitle = 'PODERES PARA FINS JUDICIAIS (AD JUDICIA)'
    const outorgante = 'Outorgante: [Nome do outorgante], [nacionalidade], [estado civil], [profissão], portador do documento de identidade de nº [número do RG], inscrito no CPF sob nº [número do CPF], residente e domiciliado à [endereço completo].'
    const outorgado = 'Outorgado: RAFAEL MOREIRA SUYAMA, brasileiro, advogado, inscrito na OAB/SP sob o nº. 484.261, portador do RG nº. 50.078.611-2 – SSP/SP, e inscrito no CPF sob o nº. 455.787.608-05, com escritório na Avenida Haguemu Matsuzawa, 1222 –, centro, cidade de Registro/SP'

    const procuracaoText = `Por este instrumento particular de procuração, o Outorgante nomeia e constitui como seu procurador o Outorgado, concedendo-lhe poderes para o foro em geral, podendo para tanto o dito advogado, confessar, reconhecer a procedência do pedido, transigir, desistir, receber citação inicial, usar de todos os recursos em direito permitidos, enfim, praticar todos os demais atos necessários ao bom e cabal desempenho deste mandato, inclusive substabelecer no todo ou em parte.
    `;

    const data = new Date()
    const dataLocal = data + ', Registro/SP'

    const assinatura = 'nome do outorgante'

  return (
    <div className="container">
      <h1 className="mb-4" style={{ whiteSpace: 'pre-line', textAlign: 'center', fontFamily: 'spectral', paddingTop: '2vw' }}>Procuração Ad Judicia</h1>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {procTitle}
      </div>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {outorgante}
      </div>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '0.5vw' }}>
        {outorgado}
      </div>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {procuracaoText}
      </div>

      <div style={{ whiteSpace: 'pre-line', textAlign: 'center', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {dataLocal}
      </div>

      <div style={{ whiteSpace: 'pre-line', textAlign: 'center', fontFamily: 'spectral', paddingTop: '5vw', textDecoration: 'overline'  }}>
        {assinatura}
      </div>
    </div>
  );
};

export default ProcuracaoView;

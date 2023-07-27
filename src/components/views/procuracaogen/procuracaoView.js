import { useEffect } from "react";
import React from 'react';
const ProcuracaoView = ({ nome, nacionalidade, estadoCivil, profissao, rg, cpf, endereco }) => {
    
  useEffect(() => {
    console.log('Props updated:', { nome, nacionalidade, estadoCivil, profissao, rg, cpf, endereco });
  }, [nome, nacionalidade, estadoCivil, profissao, rg, cpf, endereco]);
   
    const procTitle = 'PODERES PARA FINS JUDICIAIS (AD JUDICIA)'
    const outorgante = `Outorgante: ${nome}, ${nacionalidade}, ${estadoCivil}, ${profissao}, portador do documento de identidade de nº ${rg}, inscrito no CPF sob nº ${cpf}, residente e domiciliado à ${endereco}.`;

    const outorgado = 'Outorgado: RAFAEL MOREIRA SUYAMA, brasileiro, advogado, inscrito na OAB/SP sob o nº. 484.261, portador do RG nº. 50.078.611-2 – SSP/SP, e inscrito no CPF sob o nº. 455.787.608-05, com escritório na Avenida Haguemu Matsuzawa, 1222 –, centro, cidade de Registro/SP'

    const procuracaoText = `Pelo presente instrumento de procuração, nomeia e constitui seu bastante procurador, a quem confere amplos poderes para o foro em geral, com cláusula “AD-JUDICIA” e “EXTRA JUDICIA”, em qualquer Juízo, Instância ou Tribunal, ou fora destes, as ações competentes e defendê-lo(a)(s) nas contrárias, seguindo umas e outras até final decisão, em primeira e superior instância, recorrer de despachos e sentenças, ainda PODERES ESPECIAIS para confessar, reconhecer a procedência do pedido, transigir, desistir, renunciar ao direito sobre que se funda a ação, receber, dar quitação e firmar compromissos, promover acordos e composições amigáveis, assinar compromissos, praticando, enfim, todos os atos necessários ao fiel e cabal desempenho deste mandato (agindo em conjunto ou separadamente) podendo inclusive substabelecer esta com ou sem reserva de iguais poderes e para o fim especial de ___.
    `;

    const data = new Date()
    const dataLocal = data + ', Registro/SP'

    const assinatura = 'nome do outorgante'

  return (
    <div className="container">

        
      <div style={{ fontSize: '1.5vw', whiteSpace: 'pre-line', textAlign: 'center', fontFamily: 'spectral', paddingTop: '2vw', fontWeight: 'bold' }}>Procuração Ad Judicia</div>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {procTitle}
      </div>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {outorgante}
      </div>
      <div style={{ whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '0.5vw' }}>
        {outorgado}
      </div>
      <div style={{ textIndent: '4vw', whiteSpace: 'pre-line', textAlign: 'justify', fontFamily: 'spectral', paddingTop: '2vw'  }}>
        {procuracaoText}
      </div>

      <div style={{ whiteSpace: 'pre-line', textAlign: 'center', fontFamily: 'spectral', paddingTop: '6vw'  }}>
        {dataLocal}
      </div>

      <div style={{ whiteSpace: 'pre-line', textAlign: 'center', fontFamily: 'spectral', paddingTop: '5vw', textDecoration: 'overline'  }}>
        {assinatura}
      </div>
    </div>
  );
};

export default ProcuracaoView;

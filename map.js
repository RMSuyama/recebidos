const fs = require('fs');
const path = require('path');

function listarArquivosEDiretorios(diretorio, nivel = 0) {
  const conteudo = fs.readdirSync(diretorio);

  conteudo.forEach(item => {
    const caminhoCompleto = path.join(diretorio, item);
    const espacos = '  '.repeat(nivel); // Indentação para exibir a hierarquia

    const stat = fs.statSync(caminhoCompleto);
    if (stat.isDirectory()) {
      console.log(`${espacos}[Pasta] ${item}`);
      listarArquivosEDiretorios(caminhoCompleto, nivel + 1);
    } else {
      console.log(`${espacos}[Arquivo] ${item}`);
    }
  });
}

const diretorioProjeto = '../HalfBlood/src'; // Insira o caminho do seu projeto aqui
listarArquivosEDiretorios(diretorioProjeto);

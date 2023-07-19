const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('../credentials.json');

const docId = '1k38SygWSHBihOUtR1v3IdNV7PMmX_dSNXAlKTytTWSk'; // Substitua pelo ID da sua planilha

async function enviarDadosParaPlanilha() {
  try {
    const doc = new GoogleSpreadsheet(docId);
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo(); // Carrega informações da planilha

    // Aqui você pode fazer outras operações com a planilha
    // Por exemplo, obter a planilha desejada e escrever os dados

    console.log('Autenticação bem-sucedida!');
  } catch (error) {
    console.error('Erro na autenticação:', error);
  }
}

enviarDadosParaPlanilha();


// const {promisify} = require('util')



// const accessSheet = async() => {
//     const doc = new GoogleSpreadsheet(docId)
//     await promisify(doc.useServiceAccountAuth) (Credential)
//     const info = await promisify(doc.getInfo)()
//     const worksheet = info.worksheets[0]

// await promisify(worksheet.addRow)({ nome: 'novo nome', email: 'a@a.com'})
// }

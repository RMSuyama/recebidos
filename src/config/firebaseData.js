import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIl2e_h_-Jqpu_3YlGk_tpB92VV5GnYvk",
  authDomain: "contas-b93d1.firebaseapp.com",
  projectId: "contas-b93d1",
  storageBucket: "contas-b93d1.appspot.com",
  messagingSenderId: "289549614172",
  appId: "1:289549614172:web:03fe4be5c3e18b57e07a99",
  measurementId: "G-MWSPKTX1KH"    
};

const app = initializeApp(firebaseConfig);

// Obtém a instância do Firestore
const firestore = getFirestore(app);

export { firestore, app as firebase }; // Exporta o firestore e a instância do Firebase
export default app; // Exporta a instância do Firebase por padrão
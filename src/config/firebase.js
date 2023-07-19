import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBIl2e_h_-Jqpu_3YlGk_tpB92VV5GnYvk",
    authDomain: "contas-b93d1.firebaseapp.com",
    projectId: "contas-b93d1",
    storageBucket: "contas-b93d1.appspot.com",
    messagingSenderId: "289549614172",
    appId: "1:289549614172:web:03fe4be5c3e18b57e07a99",
    measurementId: "G-MWSPKTX1KH"    
   
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore(); // Importe o módulo Firestore

export { firestore, firebaseConfig };
export default firebase;
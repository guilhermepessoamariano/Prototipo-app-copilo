//Prototipo - apenas como seria a amarração com o banco de dados

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
        apiKey: "protipo-copilo",
        authDomain: "prototipo-copilo.firebaseapp.com",
        databaseURL: "https://prototipo-copilo.firebaseio.co",
        projectId: "prototipo-copilo",
        storageBucket: "prototipo-copilo-30c0e.appspot.com",
        messagingSenderId: "00000000",
        appId: "000000000000"
    });
  
  
  const db = firebase.firestore();

  
  export {db};
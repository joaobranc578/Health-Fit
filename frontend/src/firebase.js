import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database"; // 👈 precisa importar o Realtime Database

// Configuração do seu app Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrCG43q_ZHSKQ3zhdLQoDXim6Px8OqpFU",
  authDomain: "health-fit-2d3ee.firebaseapp.com",
  databaseURL: "https://health-fit-2d3ee-default-rtdb.firebaseio.com", // 👈 adiciona isso!
  projectId: "health-fit-2d3ee",
  storageBucket: "health-fit-2d3ee.appspot.com",
  messagingSenderId: "1037704153809",
  appId: "1:1037704153809:web:23a56a91222b42bf3713f0",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Auth e provedor Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app); // 👈 inicializa o banco

// Exporta tudo que vai ser usado
export { auth, provider, signInWithPopup, db };
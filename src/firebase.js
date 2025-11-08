import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrCG43q_ZHSKQ3zhdLQoDXim6Px8OqpFU",
  authDomain: "health-fit-2d3ee.firebaseapp.com",
  projectId: "health-fit-2d3ee",
  storageBucket: "health-fit-2d3ee.appspot.com",
  messagingSenderId: "1037704153809",
  appId: "1:1037704153809:web:23a56a91222b42bf3713f0",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Auth e o provedor Google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exporta tudo que o Login.jsx vai usar
export { auth, provider, signInWithPopup };
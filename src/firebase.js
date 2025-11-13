import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword, // ✅ Adicione esta linha
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrCG43q_ZHSKQ3zhdLQoDXim6Px8OqpFU",
  authDomain: "health-fit-2d3ee.firebaseapp.com",
  projectId: "health-fit-2d3ee",
  storageBucket: "health-fit-2d3ee.appspot.com",
  messagingSenderId: "1037704153809",
  appId: "1:1037704153809:web:23a56a91222b42bf3713f0",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Serviços
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// ✅ Exporte tudo que o frontend precisa
export { auth, db, provider, signInWithPopup, signInWithEmailAndPassword };

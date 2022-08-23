import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDs3qO03KHEqlHsxZ8pJ2tw_ECZ0XayAHw",
    authDomain: "mbproject-0810.firebaseapp.com",
    projectId: "mbproject-0810",
    storageBucket: "mbproject-0810.appspot.com",
    messagingSenderId: "906173000504",
    appId: "1:906173000504:web:45f873f57cbdcfbcb0efcd",
    measurementId: "G-S601Q9EG8L"
  };

console.log("storageRef",storage);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const signUp = async function (Name, Phone, Email) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      Name,
      Phone,
      Email
    );
    return true;
  };

  export { signUp};
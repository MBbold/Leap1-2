import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where, setDoc, } from "firebase/firestore";
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

// console.log("storageRef",storage);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const signUp = async function (name, email, phone, movieName, time, ticket, seat, ticketPrice) {
    try {
      // const userCredential = await createUserWithEmailAndPassword(
      //   auth,
      //   signupEmail,
      //   signupPassword,
      //   signupName
      // );
      // 1. User ID-iigaa barij awna.
      // const userUid = userCredential.user.uid;
  
      // 2. User ID-iigaaraa shineer uusgesen DOCUMENT COLLECTION-oo FIRESTORE DATABASE dotor hadgalna.
      const docRef = await addDoc(collection(db, "Urgoo"), {
        name: name,
        email:email,
        phone:phone,
        movieName: movieName,
        time: time,
        ticket:ticket,
        seat:seat,
        ticketPrice:ticketPrice,
      });
  
      return true;
    } catch (error) {
      return false;
    }
  };

  export { signUp};
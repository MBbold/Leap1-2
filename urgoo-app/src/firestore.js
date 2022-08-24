import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where, setDoc, arrayUnion, updateDoc} from "firebase/firestore";
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
      const docId = localStorage.getItem("docId")
      const docRef =  doc(db, "Urgoo", docId);
      await updateDoc(docRef, {
          Users: arrayUnion({
          name: name,
          email:email,
          phone:phone,
          movieName: movieName,
          time: time,
          ticket:ticket,
          ticketPrice:ticketPrice,
        }),
        Seat:arrayUnion(...seat)
      });

      return true;
    } catch (error) {
      return false;
    }
  };
  const getUserDataFromFireStore = async function () {
    // user buh data-g tataj awah

    const docData = await collection(db, "Urgoo");
    let queryData = await getDocs(docData);
    let orderSeat = [];

    queryData.forEach((doc) => {
      let userData = doc.data();
      console.log("userData",userData);
      let docId = doc.id
      orderSeat = userData.Seat
      localStorage.setItem("docId", JSON.stringify(docId));
    });
    return orderSeat;

  };
  // getUserDataFromFireStore()
  export { signUp, getUserDataFromFireStore};
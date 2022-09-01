import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where, setDoc, arrayUnion, updateDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { firebaseConfig } from "./firebaseKey";



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
  const getData = async ()=>{
    const docref = collection(db, "Users")
    const queryData = await getDocs(docref);
    console.log("queryData", queryData);
    return queryData
  }
  const getFirebase = async (phone)=>{
    try {
      const usersData = await getData();
      usersData.forEach((doc)=>{
        const getUser = doc.data()
        if(getUser.phone === +phone){
          console.log("Bi mun bna");
        }else{
          alert("Ta burtgelgu bna")
        }
      })
      // if(usersData.docs === 0){
      //   addFirebase()
      //   alert("hey bi shalgaj bna")
      // } else {
      //   updateFirebase()
      // }
    } catch (error) {
      
    }
  }
  // const addFirebase = async ()=>{
  //   const docref = collection(db, "Users")
  //   await addDoc(docref, {
  //     name:"MB",
  //     phone: 80797850
  //   })
  // }
  // const updateFirebase = async()=>{
  //   const docref = collection(db, "Users")
  //   const queryData = await getDocs(docref);
  //   await updateDoc(queryData.docs, {
  //     name:"bold",
  //     phone: 80797850
  //   })
  // }



  // getFirebase()
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
  export { signUp, getUserDataFromFireStore, getFirebase};
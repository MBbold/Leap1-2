import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where, setDoc, arrayUnion, updateDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseKey";



// console.log("storageRef",storage);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const useGetDataFromFire = () => {
    const [userDataObj, setUserDataObj] = useState([]);
    const getDataUsers = async ()=>{
      const docref = collection(db, "Users")
      const queryData = await getDocs(docref);
      // setfirebaseUsersData(queryData);
      const item = [];
      if(queryData){
        queryData.docs.forEach((doc)=>{
          item.push(doc.data())
        })
        setUserDataObj(item)
      }
      
    }
    useEffect(()=>{
      getDataUsers();
    },[]);
    return {userDataObj, getDataUsers}
  }


  const setUserDataSignUp = (userName, userPhone)=>{
    console.log(userName, userPhone);
    const setDataUsers = async ()=>{
      const docref = collection(db, "Users")
      await addDoc(docref, {
      name:userName,
      phone: userPhone
      })
    }
    setDataUsers();
    
    // useEffect(()=>{
    //   getDataUsers();
    // },[]);
  }
  









  
  
  // const setDataUser = (userName, phoneNumber) =>{
  //   const usersData = getDataUsers();
  //   usersData.forEach((doc)=>{
  //     if(doc.phone === phoneNumber){
  //       alert("Tani dugaar burtgeltei bna")
  //     }
  //   })
  // }
  // const getFirebase = async (phone)=>{
  //   try {
  //     const usersData = await getDataUsers();
  //     usersData.forEach((doc)=>{
  //       const getUser = doc.data()
  //       if(getUser.phone === +phone){
  //         console.log("Bi mun bna");
  //       }else{
  //         alert("Ta burtgelgu bna")
  //       }
  //     })
  //     // if(usersData.docs === 0){
  //     //   addFirebase()
  //     //   alert("hey bi shalgaj bna")
  //     // } else {
  //     //   updateFirebase()
  //     // }
  //   } catch (error) {
      
  //   }
  // }
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
      let docId = doc.id
      orderSeat = userData.Seat
      localStorage.setItem("docId", JSON.stringify(docId));
    });
    return orderSeat;

  };
  // getUserDataFromFireStore()
  export { signUp, getUserDataFromFireStore, useGetDataFromFire, setUserDataSignUp};
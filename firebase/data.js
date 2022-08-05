// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyDs3qO03KHEqlHsxZ8pJ2tw_ECZ0XayAHw",
//     authDomain: "mbproject-0810.firebaseapp.com",
//     projectId: "mbproject-0810",
//     storageBucket: "mbproject-0810.appspot.com",
//     messagingSenderId: "906173000504",
//     appId: "1:906173000504:web:45f873f57cbdcfbcb0efcd",
//     measurementId: "G-S601Q9EG8L"
//   };

// console.log("storageRef",storage);





//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

// // try {
// //   const docRef = await addDoc(collection(db, "users"), {
// //     first: "Amgalan",
// //     last: "Batnyamsuren",
// //     age: 23
// //   });

// //   console.log("Document written with ID: ", docRef.id);
// // } catch (e) {
// //   console.error("Error adding document: ", e);
// // }

// const getUserDataFromFireStore = async function () {
//     const docData = await collection(db, "users");
//     let queryData = await getDocs(docData);
//     // queryData.forEach((doc) => {
//     //     let userData = doc.data();
//     //     console.log(userData);
//     //   });
//       const q = query(docData, where('first', '==', 'Amgalan'))
//       if (q.empty) {
//                 console.log("Snap: ",q.data())
//                 }
//                 else {
//                 console.log("No such document")
//                 }
//     //   q.forEach((doc) => {
//     //     if (doc.empty) {
//     //         console.log("Snap: ",doc.data())
//     //         }
//     //         else {
//     //         console.log("No such document")
//     //         }
//     //   });
        
//     // localStorage.setItem("loggedUserData", JSON.stringify(userData));
//   };
//   getUserDataFromFireStore();






//======================Firestorage luu upload hiiw===========================

const {initializeApp, cert } = require("firebase-admin/app")
const {getStorage} = require('firebase-admin/storage')

const { v4:uuid_v4 } = require('uuid')
const http = require("http")
const serviceAccount = require("./adminKey.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "gs://mbproject-0810.appspot.com"
});

const bucket = getStorage().bucket();
const filePath = 'test.png';
const upload = async(filePath)=>{
    let uuid = uuid_v4();
    console.log(uuid);
    let data = await bucket.upload(filePath, {
        metadata:{
            metadata:{
                firebaseStorageDownloadTokens: uuid
            }
        }
    })
    let file = data[0];
    return `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${file.name}?alt=media&token=${uuid}`
}
http.createServer(async(req, res)=>{
    try {
        let url = await upload(filePath);
        console.log(url);
    } catch (error) {
        console.log(error);
    }
}).listen(8080)

// console.log(upload(filePath));
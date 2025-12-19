
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyDT71NUT6zNWWWVI-g01DS5yahx-8VGXz8",
//   authDomain: "resturentapp-345f8.firebaseapp.com",
//   projectId: "resturentapp-345f8",
//   storageBucket: "resturentapp-345f8.firebasestorage.com",
//   messagingSenderId: "511654424518",
//   appId: "1:511654424518:web:5032e6cf74fd720a2cccc7"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT71NUT6zNWWWVI-g01DS5yahx-8VGXz8",
  authDomain: "resturentapp-345f8.firebaseapp.com",
  projectId: "resturentapp-345f8",
  storageBucket: "resturentapp-345f8.appspot.com",   
  messagingSenderId: "511654424518",
  appId: "1:511654424518:web:5032e6cf74fd720a2cccc7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

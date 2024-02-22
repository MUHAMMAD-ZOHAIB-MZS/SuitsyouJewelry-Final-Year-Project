
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



// import { initializeApp } from "firebase/compat/app";
// import {getFirestore} from "firebase/compat/firestore";
// import {getStorage} from "firebase/storage";

// import firebase from '../Firebase/FirebaseConfig'

const firebaseConfig = {
  apiKey: "AIzaSyDxpj0dyVLTvjOxz-_WENfqmvpGII8uSZo",
  authDomain: "jewelryapp-83fda.firebaseapp.com",
  projectId: "jewelryapp-83fda",
  storageBucket: "jewelryapp-83fda.appspot.com",
  messagingSenderId: "290254328110",
  appId: "1:290254328110:web:f3b7a4b8a72470720aaabf"
};

// initialize Firebase
// const app = initializeApp(firebaseConfig);
// firebase.firestore().settings({ experimentalForceLongPolling: true });
// const db = getFirestore(app);
// const storage = getStorage(app);

// export {storage , db};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export {firebase }
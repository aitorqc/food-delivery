import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, getStoreage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAnaIbMBOeWjDJIfVaxQe0Qfa1l7INoODE",
    authDomain: "food-delivery-99ad9.firebaseapp.com",
    databaseURL: "https://food-delivery-99ad9-default-rtdb.firebaseio.com",
    projectId: "food-delivery-99ad9",
    storageBucket: "food-delivery-99ad9.appspot.com",
    messagingSenderId: "380330790112",
    appId: "1:380330790112:web:bff8959ddf7c07ed4a9485"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
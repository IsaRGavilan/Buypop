import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/messaging';
import 'firebase/compat/storage';




const config = {
    apiKey: "AIzaSyCHpA5h3HLhj6QJCXkJv68UNf_Xj1R7eYM",
    authDomain: "buypopionic-1.firebaseapp.com",
    projectId: "buypopionic-1",
    storageBucket: "buypopionic-1.appspot.com",
    messagingSenderId: "746368513604",
    appId: "1:746368513604:web:f6d6f196828890a3c9ee11"
  };

firebase.initializeApp(config);
// eslint-disable-next-line react-hooks/rules-of-hooks

export async function loginUser(username:string,password:string){
    //Autentificación con firebase, usuario y contraseña

    try{
        const res=await firebase.auth().signInWithEmailAndPassword(username,password);
        console.log(res);
        return true;
    }catch(error){
        return false;
    }
}

export async function registerUser(username:string,password:string) {

    try{
        const res=await firebase.auth().createUserWithEmailAndPassword(username,password)
        console.log(res)
        return true
    }catch(error){
        return false
    }
}
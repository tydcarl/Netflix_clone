import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
    EmailAuthProvider, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-CPpZK3H0OlRekn6XaykFsmVaxjfNE1g",
  authDomain: "netflix-clone-38199.firebaseapp.com",
  projectId: "netflix-clone-38199",
  storageBucket: "netflix-clone-38199.firebasestorage.app",
  messagingSenderId: "234016206134",
  appId: "1:234016206134:web:69b5fed519f5d369039797",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid, 
            name, 
            EmailAuthProvider: "local", 
            email,
        })
    } catch (error)  {
        console.log(error);
        alert(error);

    }

}

const login = async(email, passowrd)=> {
    try {
       await signInWithEmailAndPassword(auth, email, password) 
    } catch (error) {
        console.log(error);
        alert(error);

    }

}

const logout = ()=> {
    signOut(auth);
}

export {auth, db, login, signup, logout}



import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
  }
});

export const userRegistration = async (email, fullname, username, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  const uid = response.user.uid;

  if (response.user) {
    try {
      await setDoc(doc(db, "users", uid), {
        uid: uid,
        fullName: fullname,
        username: username,
        followers: [],
        following: [],
        notifications: [],
        website: "",
        bio: "",
        phoneNumber: "",
        gender: "",
        posts: 0,
      });

      await updateProfile(auth.currentUser, {
        displayName: fullname,
      });

      return response.user;
    } catch (err) {
      console.log("Error: " + err);
    }
  }
};

export const userLogin = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((err) => alert(err));
};

const logout = () => {
  signOut(auth)
    .then(() => {
      alert("Successfully logged out.");
    })
    .catch((error) => {
      alert("Couldn't sign out err is: " + error);
    });
};

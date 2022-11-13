import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  query,
  collection,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { setUser } from "./utils/setUser";

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

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const getUser = await getDoc(doc(db, "users", user.uid));

    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...getUser.data(),
    };

    setUser(data);
  } else {
    setUser(false);
  }
});

export const userRegistration = async (email, fullname, username, password) => {
  const response = await getDocs(
    query(collection(db, "users"), where("username", "==", username))
  );

  if (response.size !== 0) {
    alert("This username already on use.");
  } else {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

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
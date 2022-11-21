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

//Assets
import DefaultProfile from "./assets/defaultPhoto.jpg";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
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
          photoSrc: DefaultProfile,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "This is my bio!",
          phoneNumber: "",
          gender: "",
          posts: [
            {
              id: 1,
              imgSrc: "https://images8.alphacoders.com/547/547511.jpg",
              desc: "Cosmic Blacksmith",
              likes: 999,
            },
            {
              id: 2,
              imgSrc: "https://images7.alphacoders.com/553/553260.jpg",
              desc: "Bio Hand",
              likes: 888,
            },
            {
              id: 3,
              imgSrc: "https://images4.alphacoders.com/562/562252.jpg",
              desc: "Reborn",
              likes: 777,
            },
          ],
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
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log("Couldn't sign out err is: " + err.code);
  }
};

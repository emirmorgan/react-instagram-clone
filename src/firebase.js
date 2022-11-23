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
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { setUser } from "./utils/setUser";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
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

export const updateUser = async (user, imageSrc, fullname, biography) => {
  const userDocRef = doc(db, "users", user.uid);

  await updateDoc(userDocRef, {
    photoSrc: imageSrc,
    fullName: fullname,
    bio: biography,
  });
};

export const createPost = async (user, imageSrc, desc, likes) => {
  const userDocRef = doc(db, "users", user.uid);

  await updateDoc(userDocRef, {
    posts: arrayUnion({
      imgSrc: imageSrc,
      desc: desc,
      likes: likes,
    }),
  });
};

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
          photoSrc:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "This is my bio!",
          phoneNumber: "",
          gender: "",
          posts: [
            {
              imgSrc: "https://images8.alphacoders.com/547/547511.jpg",
              desc: "Cosmic Blacksmith",
              likes: 999,
            },
            {
              imgSrc: "https://images7.alphacoders.com/553/553260.jpg",
              desc: "Bio Hand",
              likes: 888,
            },
            {
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
        alert("Error: " + err);
      }
    }
  }
};

export const userLogin = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    alert("Couldn't sign out err is: " + err.code);
  }
};

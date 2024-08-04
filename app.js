

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("user", user)

//     } else {
//         console.log("user not exist")
//     }
// });


// let signUp = () => {
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");

//     signInWithEmailAndPassword(auth, email.value, password.value)
//         .then((res) => {
//             console.log("res", res.user)
//         })
//         .catch((error) => {
//             console.log("error", error.message)
//         });
// }

// let signupBtn = document.getElementById("signupBtn");
// signupBtn.addEventListener("click", signUp)


// let logOut = () => {
//     signOut(auth).then(() => {
//         console.log("log Out Successfully")
//     }).catch((error) => {
//         console.log("error")
//     })
// };

// let logoutBtn = document.getElementById("logoutBtn");
// logoutBtn.addEventListener("click", logOut)

// let sendCode = () => {

//     sendEmailVerification(auth.currentUser)
//         .then(() => {
//             console.log("sent")
//         });
// }

// let verifyBtn = document.getElementById("verifyBtn");
// verifyBtn.addEventListener("click", sendCode)


// let verifyGoogke = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {

//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             const user = result.user;
//             console.log("token", token)
//             console.log("user", user)

//         }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.customData.email;
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             console.log("errorCode" , errorCode)
//             console.log("credential" , credential)

//         });
// }


// let verifyGoogle = document.getElementById("verifyGoogle");
// verifyGoogle.addEventListener("click", verifyGoogke)



// let sendOtp = () => {

//     const appVerifier = window.recaptchaVerifier;
//     let number = document.getElementById("number")

//     signInWithPhoneNumber(auth, `+${number.value}`, appVerifier)
//     console.log(`+${number.value}`)

//         .then((confirmationResult) => {
//             window.confirmationResult = confirmationResult;
//             console.log("confirmationResult", confirmationResult)

//         })
//         .catch((error) => {
//             console.log("error", error)
//         })
// }

// let phoneBtn = document.getElementById("phoneBtn")
// phoneBtn.addEventListener("click", sendOtp)

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
//     'size': 'normal',
//     'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // ...
//     },
//     'expired-callback': () => {
//         // Response expired. Ask user to solve reCAPTCHA again.
//         // ...
//     }
// });





// let Verify = () => {

// }

// let verifyBtn = document.getElementById("verifyBtn")
// verifyBtn.addEventListener("click", Verify)

// add data in firebase storage 

import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, GoogleAuthProvider, provider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber, doc, setDoc, db, getDoc, collection, addDoc, updateDoc, onSnapshot , deleteDoc  } from "./firebase.js";

// let signUp = () => {

//     let name = document.getElementById("name");
//     let age = document.getElementById("age");
//     let address = document.getElementById("address");
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");


// let userData = {
//     name: name.value,
//     age: age.value,
//     address: address.value,
//     password: password.value
// }

//     createUserWithEmailAndPassword(auth, email.value, password.value)
//         .then(async (res) => {
//             console.log("res", res.user);

//             const washingtonRef = doc(db, "cities", "DC");
//             await updateDoc(washingtonRef, {
//             capital: true
// });


// const docRef = await addDoc(collection(db, "users"), {
//     name: "syrup",
//     country: "pakistan"
//   });
//   console.log("Document written with ID: ", docRef.id);


// await setDoc(doc(db, "users", res.user.uid), userData);

//             console.log("user added")
//         })

//         .catch((error) => {
//             console.log("error", error.message)
//         });
// }
// let signupBtn = document.getElementById("signupBtn");
// signupBtn.addEventListener("click", signUp)

// get data from data base ################################



// let logIn = () => {
//     let email = document.getElementById("email");
//     let password = document.getElementById("password");

//     signInWithEmailAndPassword(auth, email.value, password.value)
//     .then(async (res) => {
//         console.log("res", res.user);
//         const docSnap = await getDoc (doc(db, "users", res.user.uid));
//         console.log("data ==>" , docSnap.exists())
//         // console.log("user added")
//     })

//     .catch((error) => {
//         console.log("error", error.message)
//     });

// }

// let logInBtn = document.getElementById("logInBtn")
// logInBtn.addEventListener("click", logIn)


//     ////////////////     CHAT         /  /////////////////////////////////////
let list = document.getElementById("list")
let add = async () => {
    let search = document.getElementById("search")
    let ref = collection(db, "todos");
    await addDoc(ref, {
        todo: search.value
    })
    console.log("todo added");
    search.value = ""
};


let getTodo = () => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
        list.innerText = ""
        snapshot.forEach((doc) => {
            console.log(doc.data() , doc.id);
            let { todo } = doc.data();
            list.innerHTML += `<li>${todo} <button onclick="delTodo('${doc.id}')">del</button></li>`
        });
      });
}

getTodo()

let delTodo = async (id) => {
console.log(id)

await deleteDoc(doc(db , "todos" , id))
console.log("deleted")
}
window.delTodo = delTodo;







let addTodo = document.getElementById("addTodo");
addTodo.addEventListener("click", add)
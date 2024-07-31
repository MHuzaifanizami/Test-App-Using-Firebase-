import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, GoogleAuthProvider, provider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber  } from "./firebase.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user)

    } else {
        console.log("user not exist")
    }
});


let signUp = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            console.log("res", res.user)
        })
        .catch((error) => {
            console.log("error", error.message)
        });
}

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signUp)


let logOut = () => {
    signOut(auth).then(() => {
        console.log("log Out Successfully")
    }).catch((error) => {
        console.log("error")
    })
};

let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logOut)

let sendCode = () => {

    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("sent")
        });
}

let verifyBtn = document.getElementById("verifyBtn");
verifyBtn.addEventListener("click", sendCode)


let verifyGoogke = () => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("token", token)
            console.log("user", user)

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("errorCode" , errorCode)
            console.log("credential" , credential)

        });
}


let verifyGoogle = document.getElementById("verifyGoogle");
verifyGoogle.addEventListener("click", verifyGoogke)



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
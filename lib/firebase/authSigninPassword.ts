import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Returns the Auth instance associated with the provided @firebase/app#FirebaseApp.
// If no instance exists, initializes an Auth instance with platform-specific default dependencies.
const auth = getAuth();

// Asynchronously signs in using an email and password.
//
// *@remarks*  
// Fails with an error if the email address and password do not match.
//
// Note: The user's password is NOT the password used to access the user's email account. The
// email address serves as a unique identifier for the user, and the password is used to access
// the user's account in your Firebase project.
export function authSigninPassword(email: string, password: string) {
  console.log({ email, password });
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}



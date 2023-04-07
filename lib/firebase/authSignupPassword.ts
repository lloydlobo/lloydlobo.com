import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Returns the Auth instance associated with the provided @firebase/app#FirebaseApp.
// If no instance exists, initializes an Auth instance with platform-specific default dependencies.
const auth = getAuth();

// Creates a new user account associated with the specified email address and password.
//
// *@remarks*  
// On successful creation of the user account, this user will also be signed in to your application.
//
// User account creation can fail if the account already exists or the password is invalid.
export function authSignupPassword(email: string, password: string) {
  console.log({ email, password });
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

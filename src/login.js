import logo from './Images/TBD Logo.PNG';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

    //change pages
    let navigate = useNavigate();
    function routeChange() {
        navigate('/home')
    }

    //css styles

    const Login_imgstyle ={
        marginTop: "120px"
    }


    const Login_pstyle ={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        padding: "20px",

        fontFamily: "Copperplate",
        fontSize: "35px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"
    }

    const Login_buttonstyle={
        position: "relative",
        marginBottom: "220px",
        marginRight: "20px",


        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",

        color: "black",
        backgroundColor: "grey"

    }


    /*
     When Login button is clicked, Firebase should be called in here for user to use Google Login
     */

    return (
         <body>
            <img src={logo} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p> You are given the beginning and the end - the middle is TBD. </p>
            <script <src="https://apis.google.com/js/platform.js" async defer></script>
               

            <div class="g-signin2" data-onsuccess="onSignIn"></div>
                <script>
                    <script src="https://apis.google.com/js/platform.js" async defer script/>
                <script> 
                    src="https://apis.google.com/js/platform.js" async defer>
                 </script>
                <meta name="google-signin-client_id" content="147286288933-9dg60rjcujakjsesuibkhqcneq9d64o8.apps.googleusercontent.com">
                <meta name="google-signin-cookiepolicy" content="single_host_origin">
                <meta name="google-signin-scope" content="profile email">
                
                
                import { getAuth, onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
                const auth = getAuth();

            function onSignIn(googleUser) {
              console.log('Google Auth Response', googleUser);
              // We need to register an Observer on Firebase Auth to make sure auth is initialized.
              const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
                unsubscribe();
                // Check if we are already signed-in Firebase with the correct user.
                if (!isUserEqual(googleUser, firebaseUser)) {
                  // Build Firebase credential with the Google ID token.
                  const credential = GoogleAuthProvider.credential(
                      googleUser.getAuthResponse().id_token);

                  // Sign in with credential from the Google user.
                  signInWithCredential(auth, credential).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.email;
                    // The credential that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                  });
                } else {
                  console.log('User already signed-in Firebase.');
                }
              });
            }
            import { GoogleAuthProvider } from "firebase/auth";

            function isUserEqual(googleUser, firebaseUser) {
              if (firebaseUser) {
                const providerData = firebaseUser.providerData;
                for (let i = 0; i < providerData.length; i++) {
                  if (providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
                      providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                  }
                }
              }
              return false;
            }




            </script>

        </body>
    );
}

export default Login;
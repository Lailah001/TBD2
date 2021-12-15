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
        <img src={logo} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p> You are given the beginning and the end - the middle is TBD. </p>

            <button type="button">Login With Google.</button>
            <script>
                // Import the functions you need from the SDKs you need
                import { initializeApp } from "firebase/app";
                import { getAnalytics } from "firebase/analytics";
                // TODO: Add SDKs for Firebase products that you want to use
                // https://firebase.google.com/docs/web/setup#available-libraries

                // Your web app's Firebase configuration
                // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                const firebaseConfig = {
                  apiKey: "AIzaSyBVaSxZr9jeetVaYxs4BXPPnv3WDj9sX8c",
                  authDomain: "tbdswe-78b59.firebaseapp.com",
                  databaseURL: "https://tbdswe-78b59-default-rtdb.firebaseio.com",
                  projectId: "tbdswe-78b59",
                  storageBucket: "tbdswe-78b59.appspot.com",
                  messagingSenderId: "399530976557",
                  appId: "1:399530976557:web:00dfdbd50f584f3129dfa4",
                  measurementId: "G-VSLYKYFHZY"
                };

                // Initialize Firebase
                const app = initializeApp(firebaseConfig);
                const analytics = getAnalytics(app);
                document.getElementByID('login').addEventListener('click',GoogleLogin);
                
                function GoogleLogin(){
                    console.log('Login Btn Call')
                    firebase_auth().SignInWithPopup(provider).then(res=>{
                        console.log(res)
                        
                    }).catch(e=>{
                        console.log(e)
                    })
                }

            <script>

        </body>
    );
}

export default Login;
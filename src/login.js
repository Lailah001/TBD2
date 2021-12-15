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
            <img style={Login_imgstyle} src={logo} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p style={Login_pstyle}> You are given the beginning and the end - the middle is TBD. </p>

            <button style={Login_buttonstyle} type="button" onClick={() => navigate('/HowToPlay')}>Start</button>
        </body>
    );
}

export default Login;
import React from 'react';
import character1 from './Images/leo.png';
//import character2 from './Images/attor.png';
//import character3 from './Images/Breeze.png';
//import character4 from './Images/amar.png';
import { useNavigate } from 'react-router-dom';



function Endings({ characterName }) {
    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
     * we need a data type to handle the character's information to pass:
     * based on the hearts they have, a certain ending would show
     */

    const Endings_imgstyle={
        width: "150px",
        height: "100px",
        marginRight: "700px"
    }

    const Endings_pstyle={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        marginRight: "700px",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"
    }

    const Endings_livesstyle={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        marginTop: "-100px",
        marginBottom: "100px",
     
        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"
    }

    const Endings_p2style={
        textAlign: "center",
        color: "red",
        backgroundColor: "white",
        padding: "30px",


        fontFamily: "Copperplate",
        fontSize: "50px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"
    }

    const Endings_buttonstyle={
        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",

        color: "black",
        backgroundColor: "grey"
    }

    return (
        <body>
            <header>
                <img style={Endings_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p style={Endings_pstyle}> Character Name {characterName} </p>
                <p style={Endings_livesstyle}>lives </p>
            </header>

            <div>
                <p style={Endings_p2style}> You made it to your goal unscathed! </p>
            </div>

            <button style={Endings_buttonstyle} type="button" onClick={() => navigate('/CharacterSelection')}>Play Again</button>

        </body>
    );

}

export default Endings;
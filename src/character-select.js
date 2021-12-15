import React from 'react';
import character1 from './Images/leo.png';
import character2 from './Images/attor.png';
import character3 from './Images/Breeze.png';
import character4 from './Images/amar.png';
import { useNavigate } from 'react-router-dom';
import {leo, breeze, amar, attor} from './backendCharacter'



function CharacterSelection() {
    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    //css styles

    const imgstyle={
        width: "170px",
        height: "130px",
        marginRight: "700px",
        borderRadius: "50%",
        marginLeft: "650px"
    }

    const pstyle={
        color: "black",
        textDecoration: "underline",
        fontFamily: "Copperplate",
        fontSize: "50px"
    }

    /*const inputstyle={
        padding: "10px"
    }*/

    const p2style={
        fontFamily: "Copperplate"
    }

    const buttonstyle={
        position: "relative",

        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",

        color: "black",
        backgroundColor: "grey",
    }

    /*
    * depending on the character that is selected, 
    * we want to return which character they select 
    * and pass that value to CharacterPersonality
    */
    //characterName = { character1,name};
    var characterName = "test";//test characterName

    return (
        <body>
            <p style={pstyle}> Select Your Character </p>
            
            <input style={imgstyle} type="image" src={character1} /> <p style={p2style}> Leo </p>
            <input style={imgstyle} type="image" src={character2} /> <p style={p2style}> Breeze </p>
            <input style={imgstyle} type="image" src={character3} /> <p style={p2style}> Amar </p>
            <input style={imgstyle} type="image" src={character4} /> <p style={p2style}> Attor </p>

            <button style={buttonstyle} type="button" onClick={() => navigate('/CharacterPersonality')}> Select </button>
        </body>
    );
}

export default CharacterSelection;
import React from 'react';
import character1 from './Images/leo.png';
//import character2 from './Images/attor.png';
//import character3 from './Images/Breeze.png';
//import character4 from './Images/amar.png';
import { useNavigate } from 'react-router-dom';



function CharacterPersonality({ characterName }) {

    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
    * depending on the character that was passed from CharacterSelection, 
    * we want to show a certain bio 
    */

    /*const characterName = "Leo";
    */
    const Personality_imgstyle={
        width: "250px",
        height: "200px"
    }

    const Personality_p1style={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        padding: "20px",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"

    }

    const Personality_p2style={
        textAlign: "center",
        color: "black",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"

    }

    const Personality_p3style={
        textAlign: "center",
        color: "black",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "break-spaces"

    }

    const Personality_buttonstyle={
        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",

        color: "black",
        backgroundColor: "grey"
    }

    const Back_buttonstyle={
        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",
        marginRight: "1900px",


        color: "black",
        backgroundColor: "grey"
    }


    return (
        <body>
            <button style={Back_buttonstyle} type="button" onClick={() => navigate('/CharacterSelection')}>Back</button>

            <img style={Personality_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p style={Personality_p1style}> Character Name: Leo {characterName} </p>
            <p style={Personality_p2style}> Beginning: Attends a school from another side of town and he doesn't know anyone there. </p>
            <p style={Personality_p2style}> Middle: TBD... </p>
            <p style={Personality_p3style}> Personality:<br/>
                -Inspired by the fire signs Aries, Leo, and Sagitarius<br/>
                -Very competitive, passionate about their craft, gets angry very easily, destroys things when very angry<br/>
                -Leo is a fire sign , born as the oldest child of a father who was a daredevil.
                Their father eventually died in an accident due to one of his greatest stunts.
                Because of this, Leo went on a path of life with anger. 
                After learning about the errors made in their life, they seeked a great change in their behavior,
                 which would create them to be a much more loving person to people. 
                 With this desire, they developed a special ability to replenish health.
                 They decided to do this challenge because like their father,they wanted to live life on The edge.<br/>
           
            </p>
            <p style={Personality_p2style}> Unique Ability: Regenerate health from anger </p>

            <button style={Personality_buttonstyle} type="button" onClick={() => navigate('/Scenario1')}>Start </button>
        </body>
    );

}

export default CharacterPersonality;
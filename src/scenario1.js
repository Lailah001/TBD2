import React from 'react';
import character1 from './Images/leo.png';
//import character2 from './Images/attor.png';
//import character3 from './Images/Breeze.png';
//import character4 from './Images/amar.png';
import hearts from './Images/1 full life.PNG';
import { useNavigate } from 'react-router-dom';

function Scenario1({ characterName }) {

    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
     * depending on the character that was passed from CharacterSelection, 
     * we want to show a certain bio 
     */

    /*
     * we need a data type to handle the character's information to pass,
     * as well as a data type to handle how many (image) hearts to show
     */

    /*
     * we only want to change route to endings on the last scenario
     */

    const Scenario1_imgstyle={
        width: "150px",
        height: "100px",
        marginRight: "700px",
        borderRadius: "50%"
    }

    const Scenario1_pstyle={
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

    const Scenario1_livesstyle={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        marginTop: "-100px",
        marginBottom: "100px",
        width: "100px",
        height: "100px"
     
    }

    const Scenario1_p2style={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        padding: "20px",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "break-spaces"
    }

    const Scenario1_buttonstyle={
        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",
        padding: "20px",

        color: "black",
        backgroundColor: "grey",
        whiteSpace: "pre-wrap"
    }

    return (
        <body>
            <header>
                <img style={Scenario1_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p style={Scenario1_pstyle}> Character Name{characterName} </p>

                <img style={Scenario1_livesstyle} src={hearts} class="lives" alt="Lives" />
                <img style={Scenario1_livesstyle} src={hearts} class="lives" alt="Lives" />
                <img style={Scenario1_livesstyle} src={hearts} class="lives" alt="Lives" />


            </header>
            <div>
                <p style={Scenario1_p2style}> Leo begins to attend school on another side of town, 
                and most of the kids at this school don’t like outsiders.
                 One of these kids decide to push Leo down at the playground. What should Leo do? </p>
            </div>
            <div className="options">
                <p style={Scenario1_p2style}> What would {characterName} do next? </p>

                <button style={Scenario1_buttonstyle} type="button" onClick={() => navigate('/Scenario2')}>Option 1<br />
                    Give him a taste of his own medicine.</button>
                <button style={Scenario1_buttonstyle} type="button" onClick={() => navigate('/Scenario2')}>Option 2<br />
                    Tell the teacher.</button>
                <button style={Scenario1_buttonstyle} type="button" onClick={() => navigate('/Scenario2')}>Option 3<br />
                    Act as if nothing happened.</button>
            </div>
        </body>
    );

}

export default Scenario1;
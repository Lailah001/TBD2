import React from 'react';
import character1 from './Images/leo.png';
//import character2 from './Images/attor.png';
//import character3 from './Images/Breeze.png';
//import character4 from './Images/amar.png';
import { useNavigate } from 'react-router-dom';

function Scenario2({ characterName }) {

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

    const Scenario2_imgstyle={
        width: "150px",
        height: "100px",
        marginRight: "700px",
        borderRadius: "50%"
    }

    const Scenario2_pstyle={
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

    const Scenario2_livesstyle={
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

    const Scenario2_p2style={
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

    const Scenario2_buttonstyle={
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
                <img style={Scenario2_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p style={Scenario2_pstyle}> Character Name{characterName} </p>
                <p style={Scenario2_livesstyle}>Lives</p>
            </header>
            <div>
                <p style={Scenario2_p2style}> Leo was walking by his father’s old motorcycle. 
                It looks like in perfect condition, but it is out of gas. 
                There is some gasoline at Old Man Harold’s House, but Old Man Harold is 
                known for shooting any trespassers on his property. What should Leo do? </p>
            </div>
            <div className="options">
                <p style={Scenario2_p2style}> What would {characterName} do next? </p>

                <button style={Scenario2_buttonstyle} type="button" onClick={() => navigate('/Scenario3')}>Option 1<br />
                    Steal the gas!</button>
                <button style={Scenario2_buttonstyle} type="button" onClick={() => navigate('/Scenario3')}>Option 2<br />
                    Buy the gas from a regular gasoline station.</button>
                <button style={Scenario2_buttonstyle} type="button" onClick={() => navigate('/Scenario3')}>Option 3<br />
                    Drive the slow car your mom got you.</button>
            </div>
        </body>
    );

}

export default Scenario2;
import React from 'react';
import character1 from './Images/leo.png';
//import character2 from './Images/attor.png';
//import character3 from './Images/Breeze.png';
//import character4 from './Images/amar.png';
import { useNavigate } from 'react-router-dom';
import hearts from './Images/1 full life.PNG';

function Scenario3({ characterName }) {

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

    const Scenario3_imgstyle={
        width: "150px",
        height: "100px",
        marginRight: "700px",
        borderRadius: "50%"
    }

    const Scenario3_pstyle={
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

    const Scenario3_livesstyle={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        marginTop: "-100px",
        marginBottom: "100px",
        width: "100px",
        height: "100px"
    }

    const Scenario3_p2style={
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

    const Scenario3_buttonstyle={
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
                <img style={Scenario3_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p style={Scenario3_pstyle}> Character Name{characterName} </p>
                
                <img style={Scenario3_livesstyle} src={hearts} class="lives" alt="Lives" />
                <img style={Scenario3_livesstyle} src={hearts} class="lives" alt="Lives" />
                <img style={Scenario3_livesstyle} src={hearts} class="lives" alt="Lives" />
            </header>
            <div>
                <p style={Scenario3_p2style}> Leo is now in college, but he has a chance 
                to become a daredevil just like his father. He doesn’t want to lose his friends, 
                but he also doesn’t want to lose out on the opportunity. What should Leo do? </p>
            </div>
            <div className="options">
                <p style={Scenario3_p2style}> What would {characterName} do next? </p>

                <button style={Scenario3_buttonstyle} type="button" onClick={() => navigate('/Endings')}>Option 1<br />
                    LIVE THE DREAM!</button>
                <button style={Scenario3_buttonstyle} type="button" onClick={() => navigate('/Endings')}>Option 2<br />
                    Stay in college, get a regular job</button>
                <button style={Scenario3_buttonstyle} type="button" onClick={() => navigate('/Endings')}>Option 3<br />
                Wait until you graduate, then pursue it when you save enough money to pursue it.</button>
            </div>
        </body>
    );

}

export default Scenario3;
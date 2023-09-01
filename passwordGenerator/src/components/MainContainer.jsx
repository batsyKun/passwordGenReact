import { useState } from "react";
import CharacterRange from "./CharacterRange";
import Conditions from "./Conditions";
import PassowrdG from "./passwordG";


const MainContainer = () => {
    const [rangeVal, setRangeVal] = useState(10)
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [conditions, setConditions] = useState({
        uppercase: false,
        lowercase: false,
        number: false,
        specialCase: false
    })
    

    return ( 
        <>  
            <div className="main">
                <input id="password" value={generatedPassword}></input>
                <PassowrdG rangeVal={rangeVal} onPasswordGenerated={setGeneratedPassword} conditions={conditions}></PassowrdG>
                <div id="controls">
                    <CharacterRange rangeVal={rangeVal} setRangeVal={setRangeVal}></CharacterRange>
                    <Conditions setConditions={setConditions} ></Conditions>
                </div>
            </div>
        </>
    );
}

export default MainContainer;
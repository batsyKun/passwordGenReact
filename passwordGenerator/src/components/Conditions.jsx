import { useState } from "react";

const Conditions = ({ setConditions}) => {
    const [checkboxes, setCheckboxes] = useState({
        uppercase: true,
        lowercase: true,
        number: true,
        specialCase: true
    });
    
    const handleCheckboxChange = (event) => {
        const checkboxName = event.target.name;
        const isChecked = event.target.checked;
    
        setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [checkboxName]: isChecked,
        }));
    };
    setConditions(checkboxes) 
    return ( 
        <>
    <div>
    <label>
        <input
        type="checkbox"
        name="uppercase"
        checked={checkboxes.uppercase}
        onChange={handleCheckboxChange}
        />
        UPPERCASE
    </label>
    <br />
    <label>
        <input
        type="checkbox"
        name="lowercase"
        checked={checkboxes.lowercase}
        onChange={handleCheckboxChange}
        />
        LowerCase
    </label>
    <br />
    <label>
        <input
        type="checkbox"
        name="number"
        checked={checkboxes.number}
        onChange={handleCheckboxChange}
        />
        Numbers
    </label>
    <br/>
    <label>
        <input
        type="checkbox"
        name="specialCase"
        checked={checkboxes.specialCase}
        onChange={handleCheckboxChange}
        />
        Special Case
    </label>
    </div>

        </>
    );
}

export default Conditions;


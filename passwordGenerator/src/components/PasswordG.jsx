import React, { useEffect } from 'react';

const PasswordG = ({ rangeVal, onPasswordGenerated, conditions }) => {
    const alphabetsUpper = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ];      
    const alphabetsLower = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"', '<', '>', ',', '.', '/', '?'];

    let allCharacters = [];

    const randomVal = (char) => {
        let randomLetters = ''; 
        for (let index = 0; index < rangeVal; index++) {
            const randomIndex = Math.floor(Math.random() * char.length);
            randomLetters += char[randomIndex];
        }
        return randomLetters;
    }

    if (conditions.uppercase) {
        allCharacters = allCharacters.concat(alphabetsUpper);
    }
    if (conditions.lowercase) {
        allCharacters = allCharacters.concat(alphabetsLower);
    }
    if (conditions.number) {
        allCharacters = allCharacters.concat(numbers);
    }
    if (conditions.specialCase) {
        allCharacters = allCharacters.concat(specialCharacters);
    }

    useEffect(() => {
        const newPassword = randomVal(allCharacters);
        onPasswordGenerated(newPassword);
    }, [rangeVal, onPasswordGenerated, conditions]);

    return ( 
        <h1>Customize your password</h1>
    );
}

export default PasswordG;

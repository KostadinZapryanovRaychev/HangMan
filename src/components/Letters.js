import React from 'react'
import { getAllLetters, getLetters, makeAguess } from '../helpers/functions'
import { currentWord } from '../context/ApplicationContext';
import useApplicationContext from '../context/ApplicationContext';

const letters = getLetters(currentWord);

const Letters = () => {
    const { correctGuesses, setCorrectGuesses, setLife, life } = useApplicationContext();
    return (

        <div>
            {console.log(letters)}
            {letters.map((letter, index) => {
                return <button key={index} onClick={() => makeAguess(currentWord, letter, setCorrectGuesses, correctGuesses, life, setLife)}> {letter}</button>
            }
            )}
        </div>
    );
}

export default Letters

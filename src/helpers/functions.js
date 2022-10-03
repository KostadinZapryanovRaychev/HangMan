
import { WORDS, ALPHABET } from '../data/constants';



function getWord() {
    let randomWordIndex = Math.floor(Math.random() * WORDS.length);
    const currentWord = WORDS[randomWordIndex];
    return currentWord;
}

function getLetters(arg) {
    let currentWordletters = [...arg];
    currentWordletters.sort(() => Math.random() - 0.5);
    let uniqueCurrentWordLetters = currentWordletters.filter(onlyUniqueValues);
    const arrayWithAvailableLetters = ALPHABET.filter((letter) => !uniqueCurrentWordLetters.includes(letter));
    const randomizedArrayWithAvailableLetters = arrayWithAvailableLetters.sort(() => Math.random() - 0.5);
    let lengthOfUniqueCurrentWordLetters = uniqueCurrentWordLetters.length;
    let lengthOfCurrentWordletters = currentWordletters.length;
    if (lengthOfUniqueCurrentWordLetters < 6) {
        lengthOfCurrentWordletters = (12 - lengthOfUniqueCurrentWordLetters);
    }
    let wrongLetterArray = randomizedArrayWithAvailableLetters.slice(0, lengthOfCurrentWordletters);
    const lettersForTheCurrentGame = uniqueCurrentWordLetters.concat(wrongLetterArray);
    return lettersForTheCurrentGame;
}


function getAllLetters() {
    return ALPHABET;
}

function onlyUniqueValues(value, index, letters) {
    return letters.indexOf(value) === index;
}


function maskWord(currentWord, correctGuesses) {
    let maskeWord = currentWord.split('').map(letter =>
        correctGuesses?.includes(letter) ? letter : "_").join(" ");
    return maskeWord;
}


function makeAguess(currentWord, letter, setCorrectGuesses, correctGuesses, life, setLife) {
    if (currentWord.includes(letter)) {
        setCorrectGuesses([...correctGuesses, letter])
    } else {
        if (life > 0) {
            setLife(prevState => prevState - 1)
        }
    }
}




export { getLetters, getWord, maskWord, getAllLetters, makeAguess };

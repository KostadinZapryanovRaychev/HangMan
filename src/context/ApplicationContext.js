import React, { createContext, useEffect, useState } from 'react'
import { getWord } from '../helpers/functions';



const AppContext = createContext();
export const currentWord = getWord();

const ApplicationContext = (props) => {



    const [correctGuesses, setCorrectGuesses] = useState([currentWord[0], currentWord[currentWord.length - 1]])
    const [life, setLife] = useState(6);
    const [image, setImage] = useState(0);
    const [modalContent, setModalContent] = useState({});
    const [preserveGameState, setPreserveGameState] = useState(false);
    const [currentGameState, setCurrentGameState] = useState([correctGuesses, life, image, currentWord]);


    useEffect(() => {
        if (life == 0) {
            setModalContent(
                {
                    title: "You're just a looseR",
                    mainContent: "Game Over !"
                }
            )
        } else {
            setModalContent(
                {
                    title: "Hey Congrats",
                    mainContent: "You shot it!"
                }
            )
        }
    }, [life]);


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("storage"));
        if (data) {
            setCurrentGameState(data);
        }
    }, [life])


    useEffect(() => {
        setCurrentGameState([life, correctGuesses, image, currentWord]);
    }, [life, correctGuesses, image])


    useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(currentGameState))
    }, [currentGameState])


    return (
        <AppContext.Provider value={{ correctGuesses, setCorrectGuesses, setLife, life, image, setImage, modalContent, setPreserveGameState }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { ApplicationContext };

export default function useApplicationContext() {
    return React.useContext(AppContext);
}





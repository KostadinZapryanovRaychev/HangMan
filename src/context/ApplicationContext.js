import React, { createContext,useEffect,useState } from 'react'
import { getWord } from '../helpers/functions';
import { IMAGES } from '../data/constants';


const AppContext = createContext();
export const currentWord = getWord();

const ApplicationContext = (props) => {
     

    
    const [correctGuesses , setCorrectGuesses] = useState([currentWord[0],currentWord[currentWord.length-1]])
    const [life , setLife] = useState(6);
    const [image , setImage] = useState(0);
    const [modalContent,setModalContent] = useState({});
    
    useEffect(()=>{
       if(life==0){
        setModalContent(
            {
                title : "You're just a looseR",
                mainContent:"Game Over !"
            }
        )
       }else {
        setModalContent(
            {
                title : "Hey Congrats",
                mainContent:"You shot it!"
            }
        )
       }
    },[life]);
       


    return (
        <AppContext.Provider value={{correctGuesses ,setCorrectGuesses,setLife,life,image,setImage,modalContent }}>
        {props.children}
        </AppContext.Provider>
    )
}

export {ApplicationContext};

export default function useApplicationContext() {
    return React.useContext(AppContext);
}





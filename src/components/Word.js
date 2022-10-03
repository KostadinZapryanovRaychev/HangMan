import React from 'react'
import { WORDS, ALPHABET } from '../data/constants';
import { getWord,maskWord } from '../helpers/functions';
import { useState } from 'react';
import useApplicationContext from '../context/ApplicationContext';
import { currentWord } from '../context/ApplicationContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomModal from './CustomModal';




const Word = () => {

    const {correctGuesses} = useApplicationContext();
    const maskedWord = maskWord(currentWord,correctGuesses);
    
    return (
        <div>      
          {!maskedWord.includes("_") ? <CustomModal></CustomModal>:<>{maskedWord}</>}
        </div>
    )
}



export default Word
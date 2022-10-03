import React from 'react';
import { useState, useEffect } from 'react';
import useApplicationContext from '../context/ApplicationContext';
import { currentWord } from '../context/ApplicationContext';
import Word from './Word';
import { IMAGES } from '../data/constants';
import CustomModal from './CustomModal';
import CustomProgressBar from './CustomProgressBar';

const Main = () => {
  const { correctGuesses, life, image, setImage } = useApplicationContext();
  const [progreesBarLifes, setProgreesBarLifes] = useState(100);
  const [bgcolor, setbgColor] = useState("green");

  useEffect(() => {
    setImage((prevState) => prevState + 1)
    setProgreesBarLifes(life * 16.8)

    if (life > 4) {
      setbgColor("green")
    } else if (life > 2) {
      setbgColor("yellow")
    } else {
      setbgColor("red")
    }

  }, [life]);

  return (
    <div>
      {!life == 0 ? <div><CustomProgressBar bgcolor={bgcolor} completed={progreesBarLifes}></CustomProgressBar></div>
        : <div>
          <CustomModal></CustomModal>
        </div>}
      <img src={IMAGES[image]} alt="Logo" />
    </div>
  )
}

export default Main
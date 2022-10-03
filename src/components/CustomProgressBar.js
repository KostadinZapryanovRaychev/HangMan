import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from '../App.css';

const CustomProgressBar = (props) => {
    const { bgcolor, completed } = props;
  

    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
    }
    
    return (
      <div className="progress-bar-containerStyles">
        <div style={fillerStyles}>
          <span className="progress-bar-labelStyles"></span>
        </div>
      </div>
    );
  };
  
  export default CustomProgressBar;
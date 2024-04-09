import styles from './App.module.css'
import React, { useState } from 'react';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer'

const App=()=>{
  const [calVal, setCalval] = useState("");
  const onButtonClick =(buttonText)=>{
    if(buttonText === 'C'){
      setCalval('')
    }else if(buttonText === '='){
      const result = eval(calVal)
      setCalval(result)
    }else {
      const newDisplayVal = calVal + buttonText;
      setCalval(newDisplayVal);
    }
    
    // console.log(buttonText);
  }
  return (
    <div className={styles.calculator}>
      <Display displayVal = {calVal}/>
      <ButtonsContainer onButtonClick = {onButtonClick}/>
    </div>
  )
}
export default App

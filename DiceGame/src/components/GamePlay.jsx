import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button } from '../styled/Button'
import { OutlineButton } from '../styled/Button'
import Rules from './Rules'
function GamePlay() {
  const [score,setScore]=useState(0);
  const [currDice,setcurrDice]=useState(1)
  const [selectedNumber,setSelectedNumber]=useState();
  const [error,setError]=useState("")
  const [showRules,setShowRules]=useState(false)

  const generateRandNumber=(min,max)=>
  {
    return Math.floor(Math.random()*(max-min)+min);
  }
  const roleDice=()=>
  {
    if(!selectedNumber){
      setError("You have not selected any number!")
      return;
    }
    const randomNumber=generateRandNumber(1,7);
    setcurrDice((prev)=>randomNumber)
    if(selectedNumber===randomNumber)
   {
    setScore((prev)=>prev+randomNumber)
   }else{
    setScore((prev)=>prev-2)
   }
   setSelectedNumber(undefined)
  }

const resetScore=()=>
{
  setScore(0)
}
   

  return (
    <MainContainer>
    <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RoleDice currDice={currDice} roleDice={roleDice}/>
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={()=>setShowRules(prev=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer=styled.main`
padding-top: 50px ;
.top_section{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btns{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
  }
`
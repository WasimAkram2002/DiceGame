
import styled from 'styled-components'

function RoleDice({currDice,roleDice}) {
  
  return (
    <DiceContainer>
    <div className='dice' onClick={roleDice}>
    <img src={`/images/dice_${currDice}.png`} alt="" />
    </div>
    <p>Click On Dice To Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .dice{
    cursor: pointer;
  }
  p{
    font-weight: 800;
  }
`
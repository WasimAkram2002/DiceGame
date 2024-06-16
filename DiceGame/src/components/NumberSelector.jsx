import React, { useState } from 'react'
import styled from 'styled-components'
function NumberSelector({setError,error,selectedNumber,setSelectedNumber}) {
    const arrNumber=[1,2,3,4,5,6];
   
    const NumSelectorHandler=(value)=>
    {
      setSelectedNumber(value);
      setError("")
    }


  return (
    <NumSelectContainer>
    <p className='error'>{error}</p>
    <div className='flex'>
    {arrNumber.map((value,index)=>(
      <Box isSelected={value===selectedNumber} key={index} onClick={()=>NumSelectorHandler(value)}>{value}</Box>
    ))}
    </div>
    <p>Select Number</p>
    </NumSelectContainer>
  )
}

export default NumberSelector


const NumSelectContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
.flex{
    display: flex;
    gap:5px;
}
.error{
  color: red;
}
`
const Box=styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=>(props.isSelected?'black':'white')};
    color: ${(props)=>(!props.isSelected?'black':'white')};
`
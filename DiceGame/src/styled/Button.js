import styled from "styled-components"

export const Button = styled.button `
min-width:220px;
height:44px;
padding: 10px, 18px;
border-radius: 5px;
background: #000000;
color: white;
border: none;
font-size: 16px;
cursor: pointer;
transition: 0.4s background ease-in;
border: 1px solid transparent;
&:hover{
    background: white;
    border: 1px solid black;
    color: black;
    transition: 0.2s background ease-in;
}

`

export const OutlineButton = styled(Button)
`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.2s background ease-in;
}`;
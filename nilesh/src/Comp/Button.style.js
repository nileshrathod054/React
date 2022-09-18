import styled from "styled-components";

export const AppContainer = styled.div`
width:100px;
height:50px;
background-color:'red';
`;

export const Button = styled.button`
    width :200px;
    height :40px;
    background-color:${(props)=> props.backgroundColor};
    &:hover{
    & label{
    background-color: coral;
    }
}`;

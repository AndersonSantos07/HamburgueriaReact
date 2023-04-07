import styled from 'styled-components'

export const Button = styled.button`

    display:flex;
    justify-content: center;
    align-items: center;
    width: 342px;
    height: 68px;
    min-height:68px;
    background: #D93856;

    
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;


    &:hover{
        opacity:0.8;
    }
    &:active{
        opacity:0.5;
    }

    border:none;
    outline:none;
    margin:50px 0;

    cursor:pointer;

    ${props => props.newStyle &&`
        background: rgba(255, 255, 255, 0.14);

    `}

`
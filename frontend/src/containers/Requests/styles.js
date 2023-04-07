import styled from 'styled-components'


export const Container = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;

    background:black;

    img{
        width: 342px;
        height: 354px;
    }
`



export const ContainerItens = styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    margin-top:50px;

`


export const Lista = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    li{
        display:flex;
        justify-content: space-between;
        padding:15px;
        color:white;
        width: 342px;
        height: 101px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 14px;
    }
    li p{
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    p:first-child{
        font-weight: 300;
    }

    div button{
        cursor:pointer;
        background:none;
        border:none;
        outline:none;
    }

    div button:hover{
        opacity: 0.8;
    }

    div button:active{
        opacity: 0.5;
    }

    div button img{
        width: 24px;
        height: 28px;
    }

    div{
        display:flex;
        max-width: 219px;
        
    }
    div:first-child{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
`


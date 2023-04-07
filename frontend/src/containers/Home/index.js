import React, { useRef, useState, } from 'react'
import axios from 'axios'
import { Container, ContainerItens, Label, Input, } from './styles';
import Headline from '../../Components/Title'
import Button from '../../Components/Button'
import Banner from '../../assets/banner.svg'
import { useHistory } from 'react-router-dom'

const App = () => {

    const [order, setOrder] = useState([])
    const inputOrder = useRef()
    const inputName = useRef()

    const history = useHistory()

    async function buttonClick() {
        const name = inputName.current.value
        const orderRequest = inputOrder.current.value

        if (name === "" && orderRequest === "") {
            alert('Escreva seu pedido e seu nome!')
        } else {
            //o axios ja envia essas informações no body, 1 arg - url 2 arg - dados que deseja enviar
            //desestruturando a resposta, pegando somente o data com id,name e order.
            const { data: newUser } = await axios.post('http://localhost:3001/orders', { name, order: orderRequest })


            //adicionando o pedido
            setOrder([...order, newUser])

            //navegando para a próxima página
            history.push('/requests')
        }

    }


    return (
        <Container>
            <img src={Banner} alt="Banner-Hamburgueria" />
            <Headline>Faça seu pedido!</Headline>
            <ContainerItens>
                <Label>Pedido</Label>
                <Input
                    placeholder='Digite o seu pedido...'
                    ref={inputOrder}
                />
                <Label>Nome do Cliente</Label>
                <Input
                    placeholder='Digite o seu nome...'
                    ref={inputName}
                />
                <Button onClick={buttonClick}>Novo Pedido</Button>

            </ContainerItens>

        </Container>



    )




















}

export default App;
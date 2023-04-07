import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, ContainerItens, Lista, } from './styles';
import Headline from '../../Components/Title'
import Button from '../../Components/Button'
import Banner from '../../assets/banner2.svg'
import Trash from '../../assets/trasher.svg'
import { useHistory } from 'react-router-dom';

const Requests = () => {

    //o array order continua, pois precisamos carregar, deletar os pedidos assim que a página abre.
    const [order, setOrder] = useState([])

    //armazenando o hook em uma variavel
    const history = useHistory()

    //toda vez que entramos na página, chama essa função para carregar todos os pedidos
    useEffect(() => {
        async function fetchUsers() {
            const { data: usersBack } = await axios.get('http://localhost:3001/orders')
            setOrder(usersBack)

        }

        fetchUsers()
    }, [])

    function goBackPage() { 
        history.push('/')
    }

    async function deleteOrder(idOrder) {
        await axios.delete(`http://localhost:3001/orders/${idOrder}`)

        const newOrder = order.filter(orders => orders.id !== idOrder)
        setOrder(newOrder)
    }


    return (
        <Container>
            <img src={Banner} alt="Banner-Hamburgueria" />
            <Headline>Pedidos</Headline>
            <ContainerItens>

                <Lista>
                    {order.map((orders) => (
                        <li key={orders.id}>
                            <div>
                                <p>{orders.order}</p> <p>{orders.name}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteOrder(orders.id)}><img src={Trash} alt="Lixeira" /></button>
                            </div>

                        </li>

                    ))}

                    <Button newStyle={true} onClick={goBackPage}>Voltar</Button>
                </Lista>
            </ContainerItens>

        </Container>

    )

}

export default Requests;
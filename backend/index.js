const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

const requests = []

//middleware confere id

const checkUserId = (req, res, next) => {


    const { id } = req.params //pegando id que chega na url

    const index = requests.findIndex(user => user.id === id) //pegando o index da array

    if (index < 0) { //caso i index for -1 retorna o erro
        return res.status(404).json({ error: "Id/User Not Found" })
    }

    req.indexUser = index
    req.idUser = id

    next()
}

app.get('/orders', (req, res) => {


    return res.json(requests)
})


//request -> pedido, nome do cliente e id
app.post('/orders', (req, res) => {
    const {name,order} = req.body
    const newOrder = {id: uuid.v4(), name, order}

    requests.push(newOrder)



    return res.status(201).json(newOrder)
})

app.delete('/orders/:id', checkUserId, (req,res) =>{
    const index = req.indexUser
    
    requests.splice(index,1)

    res.json(requests)
})


app.listen(port, () => console.log(`🚀 O servidor está rodando na porta ${port}`))
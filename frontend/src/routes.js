import React from "react";
//importando "propriedades" dentro do react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//importando as páginas
import Home from './containers/Home'
import Requests from "./containers/Requests";


//criando o componente de roteamento

//path -> caminho da url.
//component -> a nossa página
//exact -> entrar na página com a url exata
//switch -> serve para assim que ele achar a rota, não procurar em outras rotas.
function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/requests" component={Requests} />   
            </Switch>

        </Router>
    )

}

export default Routes;
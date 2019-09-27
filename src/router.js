import Vue from "vue"
import Router from 'vue-router'
import Inicio from './components/Inicio'

import Menu from "./components/template/Menu"
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)


// Configuração do vue router
// Cada objeto de configuração diz qual componente deve ser carregado quando o usuario entrar no endereço definido no 'path'
export default new Router({
    // mode é o modo de tratamento da aplicação com o servidor, na url, o que está depois do hash não é enviado para o servidor, ficando preso somente ao browser
    mode: "hash",
    routes: [{
        path: "/",
        // component: Inicio
        components: {
            default: Inicio, 
            menu: Menu
        }
    }, {
        path: "/usuario",
        component: Usuario,
        props: true,
        children: [
            { path: "", component: UsuarioLista },
            { path: ":id", component: UsuarioDetalhe, props: true },
            { path: ":id/editar", component: UsuarioEditar, props: true, name:"editarUsuario" }
        ]
    }, {
        // quando o usuario digitar o caminho '/redirecionar' ele sera redirecionado para "/usuario"
        path: "/redirecionar",
        redirect: "/usuario"
    }, {
        // "*" indica que qualquer caminho não definido dentro da aplicação, redirecionará para uma rota especifica
        path: "*" ,
        redirect: "/"
    }]
})
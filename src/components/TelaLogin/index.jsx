import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'

import UsuarioContext from "../../contexts/usuarioContext"

export default function TelaLogin() {

    const navigate = useNavigate()

    const {setUsuario} = useContext(UsuarioContext)

    const [login, setLogin] = useState(
        {
            email: "",
            senha: ""
        }
    )

    function realizarLogin(e) {
        e.preventDefault()

        axios.post("http://localhost:5000/login", login)
            .then(res => {
                setUsuario(res.data)

                window.localStorage.setItem('usuario', JSON.stringify(res.data))

                navigate("/registros", {replace: true})
            })
            .catch(err => {
                alert("Erro")
            })
    }

    return (
        <Container>
            <h1>MyWallet</h1>

            <form onSubmit={realizarLogin}>
                <input
                    required
                    type="text"
                    placeholder='E-mail'
                    value={login.email}
                    onChange={e => setLogin({...login, email: e.target.value})}
                />
                <input
                    required
                    type="password"
                    placeholder='Senha'
                    value={login.senha}
                    onChange={e => setLogin({...login, senha: e.target.value})}
                />
                <button type='submit'>Entrar</button>
            </form>

            <Link to={"/cadastro"}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #9062BE;

    h1 {
        font-family: 'Saira Stencil One', cursive;

        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;

        margin-bottom: 24px;

        color: #FFFFFF;
    }

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
    }
    form * {
        margin: 0 24px 13px 24px;
    }
    form input {
        width: calc(100% - (24px * 2));
        height: 58px;

        background: #FFFFFF;
        border-radius: 5px;
    }
    form button {
        width: calc(100% - (24px * 2));
        height: 46px;

        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #FFFFFF;

        border: none;
        border-radius: 5px;

        background: #A328D6;
    }

    p {
        margin-top: 23px;

        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #FFFFFF;
    }
`
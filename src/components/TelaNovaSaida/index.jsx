import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from 'styled-components'

import UsuarioContext from "../../contexts/usuarioContext"

export default function TelaNovaSaida () {

    const navigate = useNavigate()

    const {usuario} = useContext(UsuarioContext)

    const [saida, setSaida] = useState(
        {
            valor: "",
            descricao: "",
            tipo: "saida"
        }
    )

    function adicionarSaida(e) {
        e.preventDefault()

        axios.post("http://localhost:5000/registros", saida, {headers: {token: usuario.token}})
            .then(res => {
                alert("Adicionado com sucesso!")

                navigate("/registros", {replace: false})
            })
            .catch(err => {
                alert("Erro")
            })
    }

    return (
        <Container>
            <h1>Nova saida</h1>

            <form onSubmit={adicionarSaida}>
                <input
                    required
                    type="text"
                    placeholder='Valor'
                    value={saida.valor}
                    onChange={e => setSaida({...saida, valor: e.target.value})}
                />
                <input
                    required
                    type="text"
                    placeholder='Descrição'
                    value={saida.descricao}
                    onChange={e => setSaida({...saida, descricao: e.target.value})}
                />
                <button type='submit'>Salvar saída</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 25px 24px 16px 24px;

    display: flex;
    flex-direction: column;

    background-color: #9062BE;

    h1 { 
        margin-bottom: 40px;

        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
    }
    form * {
        margin-bottom: 13px;
    }
    form input {
        width: 100%;
        height: 58px;

        background: #FFFFFF;
        border-radius: 5px;
    }
    form button {
        width: 100%;
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
`
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'

export default function TelaCadastro() {

    const navigate = useNavigate()

    const [cadastro, setCadastro] = useState(
        {
            nome: "",
            email: "",
            senha: "",
            confirmacaoSenha: ""
        }
    )

    function realizarCadastro(e) {
        e.preventDefault()

        console.log(cadastro)

        axios.post("http://localhost:5000/cadastro", cadastro)
            .then(res => {
                alert("Usuário cadastrado com sucesso!")

                navigate("/", {replace: true})
            })
            .catch(err => {
                alert("Algo deu errado :(")
            })
    }

    return(
        <Container>
            <h1>MyWallet</h1>

            <form onSubmit={realizarCadastro}>
                <input
                    required
                    type="text"
                    placeholder='Nome'
                    value={cadastro.nome}
                    onChange={e => setCadastro({...cadastro, nome: e.target.value})}
                />
                <input
                    required
                    type="text"
                    placeholder='E-mail'
                    value={cadastro.email}
                    onChange={e => setCadastro({...cadastro, email: e.target.value})}
                />
                <input
                    required
                    type="password"
                    placeholder='Senha'
                    value={cadastro.senha}
                    onChange={e => setCadastro({...cadastro, senha: e.target.value})}
                />
                <input
                    required
                    type="password"
                    placeholder='Confirme a Senha'
                    value={cadastro.confirmacaoSenha}
                    onChange={e => setCadastro({...cadastro, confirmacaoSenha: e.target.value})}
                />
                <button type='submit'>Cadastrar</button>
            </form>

            <Link to={"/"}>
                <p>Já tem uma conta? Entre agora!</p>
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
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {BiExit} from 'react-icons/bi'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import { Link } from "react-router-dom"
import axios from 'axios'
import styled from 'styled-components'
import Registros from './Registros'

import UsuarioContext from '../../contexts/usuarioContext'

export default function TelaRegistros () {

    const navigate = useNavigate()

    const {usuario} = useContext(UsuarioContext)

    const [registros, setRegistros] = useState([])

    useEffect(() => {
        if (usuario) {
            axios.get("http://localhost:5000/registros", {'headers': {token: usuario.token}})
                .then(res => {
                    setRegistros(res.data)
                })
                .catch(err => {
                    alert("Erro")
                })
        }
    }, [usuario])

    function sair() {
        window.localStorage.removeItem('usuario')

        navigate("/", {replace: true})
    }

    return (
        <Container>
            <div>
                <h2>Olá, {usuario?.nome}</h2>
                <BiExit onClick={sair}/>
            </div>

            <Registros registros={registros}/>

            <div>
                <Link to={"/registros/entrada"}>
                    <button>
                        <AiOutlinePlusCircle/>
                        <p>Nova <br/> Entrada</p>
                    </button>
                </Link>
                <Link to={"/registros/saida"}>
                    <button>
                        <AiOutlineMinusCircle/>
                        <p>Nova <br/> Saída</p>
                    </button>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 25px 24px 16px 24px;

    background-color: #9062BE;

    & > div:first-of-type {
        width: 100%;

        display: flex;
        justify-content: space-between;

        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    & > div:last-of-type {
        width: 100%;

        display: flex;
        justify-content: space-between;
    }

    button {
        width: 155px;
        height: 114px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 10px;

        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 20px;
        color: #FFFFFF;
        
        border: none;
        border-radius: 5px;

        background: #A328D6;
    }

    button p {
        font-size: 17px;
    }
`
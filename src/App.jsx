import { useState, useEffect } from "react"
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsuarioContext from './contexts/usuarioContext';

import TelaLogin from './components/TelaLogin';
import TelaCadastro from './components/TelaCadastro';
import TelaRegistros from './components/TelaRegistros';
import TelaNovaEntrada from './components/TelaNovaEntrada';
import TelaNovaSaida from './components/TelaNovaSaida';

export default function App() {

    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        setUsuario(JSON.parse(window.localStorage.getItem('usuario')))
    }, [])

    return (
        <Container>
                <UsuarioContext.Provider value={{usuario, setUsuario}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TelaLogin/>} />
                            <Route path="/cadastro" element={<TelaCadastro/>} />
                            <Route path="/registros" element={<TelaRegistros/>} />
                            <Route path="/registros/entrada" element={<TelaNovaEntrada/>} />
                            <Route path="/registros/saida" element={<TelaNovaSaida/>} />
                        </Routes>
                    </BrowserRouter>
                </UsuarioContext.Provider>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    font-family: 'Raleway', sans-serif;

    * {
        box-sizing: border-box;
    }
`
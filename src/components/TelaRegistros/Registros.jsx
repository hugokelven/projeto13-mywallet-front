import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Registro from './Registro'

export default function Registros ({registros}) {

    const [saldo, setSaldo] = useState(0)

    useEffect(() => {
        let valor = 0

        registros.forEach(registro => {
            if (registro.tipo === "entrada") {
                valor += parseInt(registro.valor)
            } else {
                valor -= parseInt(registro.valor)
            }
        });

        setSaldo(valor)
    }, [registros])

    return (
        <Container>
            <SemRegistros registros={registros}>Não há registros de <br/> entrada ou saída</SemRegistros>

            <div>
                {registros.map((registro, i) => <Registro key={i} registro={registro}/>)}
            </div>

            <Saldo saldo={saldo}>
                <p>Saldo</p>
                <p>{saldo}</p>
            </Saldo>
        </Container>
    )
}

const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 446px;

    margin: 22px 0 13px 0;

    padding: 23px 11px 10px 12px;

    border-radius: 5px;

    background: #FFFFFF;
`

const SemRegistros = styled.p`
    display: ${props => props.registros.length > 0 ? "none" : ""};
    position: absolute;
    top: calc(50% - 26px); left: calc(50% - 76px);

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`

const Saldo = styled.div`
    display: flex;
    justify-content: space-between;

    & p:first-of-type {
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    & p:last-of-type {
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: ${props => props.saldo >= 0 ? "#03AC00" : "#C70000"};
    }
`
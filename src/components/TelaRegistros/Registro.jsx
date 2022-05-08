import styled from 'styled-components'

export default function Registro ({registro}) {

    const {valor, descricao, tipo} = registro

    return (
        <Container>
            <span>
                <Data>Data</Data>
                <Descricao>{descricao}</Descricao>
            </span>

            <Valor tipo={tipo}>{valor}</Valor>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        display: flex;
        justify-content: space-between;
    }
`

const Data = styled.p`
    margin-right: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`

const Descricao = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

const Valor = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.tipo === "entrada" ? "#03AC00" : "#C70000"};
`
import {Link, useLocation } from "react-router-dom";   
import styled from "styled-components"

export default function Confirmation(){
    const {state} = useLocation();
    return(
        <Container>
            <Topo>
                <Title>Pedido feito com sucesso!</Title>
            </Topo>
            <b>Filme e sessão</b>
            <p> {state.objectFilm.movie.title}</p>
            <p> {state.objectFilm.day.date} {state.objectFilm.name}</p>
            

            <b> Ingressos</b>
            {state.request.cadeira.map((e)=><p key={e+1000000} >A assento {e} </p> )}

            <b>Comprador</b>
            <p>Nome: {state.request.name}</p>
            <p>CPF: {state.request.cpf}</p>

            <h2><Link to="/"><button > Voltar para Home </button></Link> </h2>

        </Container>
    )
}

const Container = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        margin-top: 60px;
        margin-bottom: 40px;
        color: #FFFFFF;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

    }
    a{
     text-decoration: none;
    }

    h2{        
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    letter-spacing: 0.04em;
    color: #293845;

    }

    b{
    margin-top: 40px;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: flex-start;
    letter-spacing: 0.04em;
    color: #293845;
    }

`;

const Topo = styled.div`
    margin-top: 60px;
    width: 60%;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
`;
const Title = styled.div`
    margin-top: 10px;
    height: 67px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #247A6B;
;
`;
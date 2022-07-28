import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import TitlePag from "../TitlePag/TitlePag";
import BottomImg from "../BottomImg/BottomImg";
import styled from 'styled-components';
import axios from 'axios';

export default function Brand(){
const {sessaoId} = useParams();
   const [objectFilm, setObjectFilm] = useState([]);
    useEffect(() => {
		const objects = axios.get(` https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
		objects.then((answer) => {setObjectFilm(answer.data)});
	}, []);
    console.log(objectFilm.length === 0 ? "loading..." : objectFilm)
    return(
        <>
            <TitlePag title={'Selecione o(s) assento(s)'} />
            <Container>
                {objectFilm.length === 0 ? "loading..." : objectFilm.seats.map((value)=> <Bal key={value.id}> {value.name} </Bal> )}
                <ContainerLegend><Bal></Bal> <Bal></Bal> <Bal> </Bal></ContainerLegend>
                <ContainerLegend><div>Selecionado</div><div>Disponível</div><div>Indisponível</div> </ContainerLegend>
            </Container>
            <Container1>
                Nome do comprador:
                <input/> 
                CPF do comprador:
                <input/>
                
            </Container1>
            <BottomImg image={objectFilm.length === 0 ? " " : objectFilm.movie.posterURL} title={objectFilm.length === 0 ? "loading..." :objectFilm.movie.title} />
            
        </>
    )



}
const Container1=styled.div`
    height: 185px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #293845;
    margin: 45px 5px ;
    margin-bottom: 120px;
    
    input{
        width: 90%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

   

`;
const ContainerLegend = styled.div`
    width: 80%;
    display: flex;
    justify-content:space-around;


`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 5px ;
`;
const Bal =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 15px;
    margin: 9px 3px;

`;
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import TitlePag from "../TitlePag/TitlePag";
import BottomImg from "../BottomImg/BottomImg";
import Mark from "../Mark/Mark";
import styled from 'styled-components';
import axios from 'axios';

export default function Brand(){
    const {imageId} = useParams();
   const [objectFilm, setObjectFilm] = useState([]);
    useEffect(() => {
		const objects = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${imageId}/showtimes`);
		objects.then((answer) => {setObjectFilm(answer.data)});
	}, []);
    return(
        <>
        <TitlePag title={'Selecione o horário'}/>
        <Container>
            <h1>
             {objectFilm.length === 0 ? "loading..." : objectFilm.days.map((value)=> <Mark key={value.id} value={value}/>) } 
            </h1>

        </Container>
        <BottomImg image={objectFilm.length === 0 ? " " : objectFilm.posterURL} title={objectFilm.length === 0 ? "loading..." :objectFilm.title} />

        </>
    )
}

const Container = styled.div`
    margin-top: 25px;
    margin-left: 20px;
    height: 300px;
    overflow: auto;
    
    h1{
        margin-bottom: 150px;
        overflow: auto;
        height: 100%;

    }
   

`;
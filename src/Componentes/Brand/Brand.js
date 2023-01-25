import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import TitlePag from "../../Componentes/TitlePag/TitlePag";
import BottomImg from "../../Componentes/BottomImg/BottomImg";
import Mark from "../../Componentes/Mark/Mark";
import styled from 'styled-components';
import axios from 'axios';
import image from "../../image/voltar.png";

export default function Brand(){
    const {state} = useLocation();
    const {imageId} = useParams();
   const [objectFilm, setObjectFilm] = useState([]);
    useEffect(() => {
		const objects = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${isNaN(parseInt(imageId)) ? state.state.state.state : imageId }/showtimes`);
		objects.then((answer) => {setObjectFilm(answer.data)});
	}, []);
    let navigate = useNavigate(); 
    return(
        <>
        <Img onClick={()=> navigate('/') } src={image}/>
        <TitlePag title={'Selecione o horário'}/>
        <Container>
        
            <h1>
                {objectFilm.length === 0 ? "loading..." : objectFilm.days.map((value)=> <Mark key={value.id} value={value} filmId={imageId} />) } 
            </h1>

        </Container>
        <BottomImg image={objectFilm.length === 0 ? " " : objectFilm.posterURL} title={objectFilm.length === 0 ? "loading..." :objectFilm.title} />

        </>
    )
}

const Container = styled.div`
    margin-top: 15px;
    margin-left: 20px;
    height: 60vh;
    overflow: auto;
    
    h1{
        margin-bottom: 150px;
        height: 100%;

    }
`;

const Img = styled.img`
    position: fixed;
    width: 25px;
    top: 20px;
    left: 20px;
`;
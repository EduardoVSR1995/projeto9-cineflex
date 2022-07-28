import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import TitlePag from "../TitlePag/TitlePag";
import Mark from "../Mark/Mark";
import styled from 'styled-components';
import axios from 'axios';

export default function Brand(){
    const {imageId} = useParams();
   const [objectFilm, setObjectFilm] = useState([]);
    useEffect(() => {
		const objects = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${imageId}/showtimes`);
		objects.then((answer) => {setObjectFilm(answer.data)});
	}, []);
    
    return(
        <>
        <TitlePag title={'Selecione o horário'}/>
        <Container>
            <h1>
             {objectFilm.length === 0 ? "loading..." : objectFilm.days.map((value)=> <Mark key={value.id}  value={value}/>) } 
            </h1>
            <li>
                <h4>   
                    <img src={objectFilm.posterURL}/>
                </h4>
                <p>{objectFilm.title} </p>
            </li>
        </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: 25px;
    
    h1{
        margin-bottom: 150px;
        overflow: auto;
        height: 60vh;

    }

    p{  
        margin-left: 15px ;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
        text-align: center;
    }
    h4{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 89px;
        width: 80px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;

    }

    li{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-left: 20px;
        width: 100%;
        height: 117px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        background-color: #DFE6ED;
        

    }

    img{
        width: 48px;
        height: 72px;
    }

`;
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitlePag from '../TitlePag/TitlePag'
import Movie from '../Movie/Movie'

export default function Select(){
    const [objectFilms, setObjectFilms] = useState([]);
    useEffect(() => {
		const objects = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
		objects.then((answer) => {setObjectFilms(answer.data)});
	}, []);
    return(
        <>
        <TitlePag title={'Selecione o filme'}/>
        <AllFilms>
            {objectFilms.map((movi) =>  <Movie key={movi.id} objectFilm={movi} /> )}
        </AllFilms>
        </>
    )
}
const AllFilms =  styled.div`
    margin: 25px 0px;
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    height: 80vh;
    overflow: auto;`;
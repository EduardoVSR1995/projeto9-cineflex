import { useState, useEffect } from 'react';
import axios from 'axios';
import TitlePag from '../TitlePag/TitlePag'
import Movie from '../Movie/Movie'
import '../Select/select.css'

export default function Select(){
    const [objectFilms, setObjectFilms] = useState([]);
    useEffect(() => {
		const objects = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		objects.then((answer) => {setObjectFilms(answer.data)});
	}, []);
    return(
        <>
        <TitlePag title={'Selecione o filme'}/>
        <div className='all-films'>
            {objectFilms.map((movi) =>  <Movie key={movi.id} objectFilm={movi} /> )}
        </div>
        </>
    )
}
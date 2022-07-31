import { useParams, useNavigate } from "react-router-dom";   
import { useState, useEffect} from 'react';
import TitlePag from "../TitlePag/TitlePag";
import BottomImg from "../BottomImg/BottomImg";
import Bal from "../Bal/Bal";
import styled from 'styled-components';
import axios from 'axios';


export default function Brand(){
const {sessaoId} = useParams();
const [ request , setRequest] = useState({ids:[],name:"",cpf:0, cadeira:[]});
   const [objectFilm, setObjectFilm] = useState([]);
    useEffect(() => {
		const objects = axios.get(` https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`);
		objects.then((answer) => {setObjectFilm(answer.data)});
	}, []);
    let navigate = useNavigate();

    function markChair (event){
        event.preventDefault();
        const requisicao = axios.post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, {ids: request.ids, name: request.name , cpf: request.cpf});
        requisicao.then(navigate("/sucesso/" , {state:{request , objectFilm} }));
        requisicao.catch(()=>alert("Algo de errado não esta certo"))
        
    }
    return(
        <>
        <TitlePag title={'Selecione o(s) assento(s)'} />
        <Allcontainer>
            <Container>
                {objectFilm.length === 0 ? "loading..." : objectFilm.seats.map((value)=> <Bal key={value.id} value={value} request={request} setRequest={setRequest} /> )}
                <ContainerLegend><Balls><b></b></Balls> <Balls></Balls> <Balls><i></i></Balls></ContainerLegend>
                <ContainerLegend><div>Selecionado</div><div>Disponível</div><div>Indisponível</div> </ContainerLegend>
            </Container>
            <Container1>
            <form onSubmit={markChair}>
                Nome do comprador:
                <input type={"text"} value={request.name} placeholder={"Digite seu nome..." } onChange={e => setRequest({...request ,name: e.target.value})} required/> <br/>
                CPF do comprador:
                <input type={"number"} value={request.cpf} placeholder={"Digite seu CPF..." } onChange={e => setRequest({...request , cpf: e.target.value})} required/>
                 <h2><button type="submit" > Reservar assento(s) </button> </h2>
            </form>
            </Container1>
            <BottomImg image={objectFilm.length === 0 ? " " : objectFilm.movie.posterURL} obj={objectFilm.length === 0 ? undefined : objectFilm} title={objectFilm.length === 0 ? "loading..." :objectFilm.movie.title} />
        </Allcontainer>
        </>
    )



}

const Allcontainer = styled.div`
    overflow: scroll;
    height: 60vh;
`;

const Container1=styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #293845;
    margin-top: 60px;
    
    form{
        margin-left:20px;
    }

    h2{        
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    a{
        text-decoration: none;
    }
    
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
    
    input{
        box-sizing: border-box;
        padding-left: 20px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        box-shadow: 0 0 0 0;
        outline: 0;
        width: 80%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

   

`;
const ContainerLegend = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-around;


`;
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0px ;

`;
const Balls =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 15px;
    margin: 9px 3px;
    b{
        border-radius: 15px;
        background-color: #8DD7CF;
        width: 100%;
        height: 100%;
        border: 1px solid #1AAE9E;
    }
    i{
        border-radius: 15px;
        background-color: #FBE192 ;
        width: 100%;
        height: 100%;
        border: 1px solid #F7C52B;

    }
   
`;
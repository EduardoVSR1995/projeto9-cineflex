import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


export default function Mark({value, filmId}){
    let navigate = useNavigate();

    return(
        <Container>
            <pre>{value.weekday} - {value.date}</pre>
            {value.showtimes.map((time,index)=> <Direction key={value.showtimes[index].id} onClick={()=> navigate("/sessao/"+value.showtimes[index].id, {state: filmId })}><Botton>{time.name}</Botton></Direction>)}
        </Container>
    );
}
const Direction = styled.div`

`;

const Container = styled.div`

    height: 100px;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    a{
     text-decoration: none;
    }

    pre{
        margin-left: 15px;
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
    `;
const Botton = styled.button`
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;

    

`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({objectFilm}){    
    return(
        <Link  to={"/filme/"+objectFilm.id}>
        <Container>
            <img src={objectFilm.posterURL}/>
        </Container>
        </Link>
    )

}
const Container = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;   
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;

    img{
    width: 129px;
    height: 193px   
    }
`;
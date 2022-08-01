import styled from 'styled-components'

export default function Banner(){
    return(
        <>
        <Container>
        CINEFLEX
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E8833A;
    position: fixed;
    top: 0px;
`;
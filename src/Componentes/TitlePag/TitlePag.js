import styled from 'styled-components'

export default function TitlePag({title}){
    return(
        <Title>{title}</Title>
    )
}

const Title = styled.div`
    margin-top: 60px;
    height: 67px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #293845;

`;
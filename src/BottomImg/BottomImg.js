import styled from 'styled-components';


export default function bottomImg({image,title}){
    return(
    <Img>
        <h4>   
            <img src={image}/>
        </h4>
        <p>{title} </p>
    </Img>    
    )
}
const Img = styled.li`
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

img{
    width: 48px;
    height: 72px;
}
`;
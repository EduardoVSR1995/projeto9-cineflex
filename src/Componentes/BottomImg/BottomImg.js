import styled from 'styled-components';


export default function bottomImg({image,title,obj}){
    if(obj === undefined ){
  return(
  <Img>
        <h4>   
            <img src={image}/>
        </h4>
        <p>{title}</p>
    </Img>)
    }
    else{
return(
    <Img>
        <h4>   
            <img src={image}/>
        </h4>
        <p>{title}<br/>{obj.day.weekday.length !=0 ?  obj.day.weekday+" - " : "Loading..." } {obj.name.length  !=0 ? obj.name : "Loading..." }</p>
    </Img> )
    }

}
const Img = styled.li`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #DFE6ED;
    
p{  
    box-sizing: border-box;
    padding-left: 10px;
    width: 90%;
    margin-left: 1px ;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    color: #293845;
    justify-content: flex-start;
}
h4{
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 89px;
    width: 64px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

}

img{
    width: 95%;
    height: 95%;
}
`;
import styled from 'styled-components';
import {useState} from 'react';


export default function Bal({value, request , setRequest}){
    const [colorBal, setColorBal] = useState(true);
    function sets(){
        const t = request.ids.length !=0 ?  request.ids.map((e)=>e) : [];
        const e = request.cadeira.length !=0 ?  request.cadeira.map((e)=>e) : [];
        t.push(value.id)
        e.push(value.name);
        setRequest({...request , ids: t, cadeira: e  });
        setColorBal(!colorBal)

    }
    function delets(){
        setRequest({...request , cadeira: request.cadeira.filter((e)=> e != value.name) , ids: request.ids.filter((e)=> e != value.id)});
    }


    if(value.isAvailable === !true){
    return(
        <Balyelow onClick={()=> alert( "Esse assento não está disponível")}>
            {value.name}
        </Balyelow>

    )
    }
    else{
        if(colorBal === true ){
            return(
        <BalNorm onClick={sets}>
            {value.name}
        </BalNorm>)
        }
        else{
            return(
            <BalSelect onClick={()=>{ delets() ;setColorBal(!colorBal)}}>
                {value.name}
            </BalSelect>    
            )
        }
    }

}

const BalSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #45BDB0;
    border-radius: 15px;
    margin: 9px 3px;

`;

const BalNorm= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 15px;
    margin: 9px 3px;

`;


const Balyelow =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 15px;
    margin: 9px 3px;

`;
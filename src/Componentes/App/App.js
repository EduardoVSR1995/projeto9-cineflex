import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Banner from '../../Componentes/Banner/Banner'
import Select from '../../Componentes/Select/Select'
import Brand from '../../Componentes/Brand/Brand'
import Chairs from '../../Componentes/Chairs/Chairs'
import Confirmation from "../../Componentes/Confirmation/Confirmation";
 
import './reset.css'

export default function App(){
    return(
        <BrowserRouter>
        <Banner/>
            <Routes>
            <Route path="/" element={<Select />} />
            <Route path='/filme/:imageId' element={ <Brand />}/>
            <Route path='/sessao/:sessaoId' element={ <Chairs />}/>
            <Route path="/sucesso/"element={<Confirmation/>} />
            </Routes>
        </BrowserRouter>
    );
}
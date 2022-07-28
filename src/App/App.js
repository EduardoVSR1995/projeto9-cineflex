import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Banner from '../Banner/Banner'
import Select from '../Select/Select'
import Brand from '../Brand/Brand'
import Chairs from '../Chairs/Chairs'
 
import '../App/reset.css'

export default function App(){
    return(
        <BrowserRouter>
        <Banner/>
            <Routes>
            <Route path="/" element={<Select />} />
            <Route path='/filme/:imageId' element={ <Brand />}/>
            <Route path='/sessao/:sessaoId' element={ <Chairs />}/>
            </Routes>
        </BrowserRouter>
    );
}
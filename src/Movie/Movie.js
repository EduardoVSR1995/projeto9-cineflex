import { Link } from "react-router-dom";
import '../Movie/movie.css'

export default function Movie({objectFilm}){    
    return(
        <Link  to={"/filme/"+objectFilm.id}>
        <div className="poster">
            <img src={objectFilm.posterURL}/>
        </div>
        </Link>
    )

}
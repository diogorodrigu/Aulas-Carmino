import React from "react";
import {Link} from "react-router-dom";

function Aside( ){
return(
    <div className="aside">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/home">Sobre</Link></li>
            <li><Link to="/home">Serviços</Link></li>
            <li><Link to="/home">Contato</Link></li>
        </ul>
    </div>
)
}
export default Aside;

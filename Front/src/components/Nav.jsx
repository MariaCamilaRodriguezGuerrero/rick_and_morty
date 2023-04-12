import React from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom"
import {useNavigate } from "react-router-dom"

export default function Nav(props) {
    const navigate = useNavigate()

    function backToHome(){
        return(
          navigate("/home")
        )
      }
    

    return (      
        <div className="nav-container">
            <SearchBar
            SearchBar style={{ width: "300px" }} onSearch={props.onSearch}/>
            <Link to = "/about" ><button>About</button></Link>
            <button onClick={backToHome}>Home</button>           
           <Link to ="/"> <button>Log out</button> </Link>
           <Link to = "/favorites" ><button>Favorites</button></Link>
                        
        </div>
    )
}

import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);


    return (
        <div>
            <h1>Estos son los detalles de tu personaje</h1>
            {character.name ?(
                <>
                <h2>
                {character.name}
            </h2>
            <li>Status {character.status}</li>
            <li>species {character.species} </li>
            <li>gender {character.gender}</li>
            <p> origin {character.origin?.name}</p>           
            <img src={character.image} alt={character.name} /> 
                </>
            ):(
                <h3>Loading...</h3>
            )}
            
            
            
        </div>

    )

}
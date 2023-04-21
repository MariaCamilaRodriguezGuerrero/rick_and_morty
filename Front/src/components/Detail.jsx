import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)       

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
        <div className="detail">
            <h1>Estos son los detalles de tu personaje</h1>
            {character.name ?(
                <>
                <h2>
                {character.name}
            </h2>
            <li>Status: {character.status}</li>
            <li>Species: {character.species} </li>
            <li>Gender: {character.gender}</li>
            <li> Origin: {character.origin?.name}</li>           
            <img src={character.image} alt={character.name} /> 
                </>
            ):(
                <h3>Loading...</h3>
            )}
            
            
            
        </div>

    )

}
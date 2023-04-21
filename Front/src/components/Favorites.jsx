import { useSelector, useDispatch, connect } from 'react-redux';
import Card from "./Card"
import { filterCards, orderCards } from '../redux/actions';
import { useState } from 'react';



function Favorites() {
  

  const [aux,setAux] = useState(false)

  const dispatch = useDispatch()
  

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  function onClose(id) {
    return (window.alert("Elimine el personaje desde Home"))
  }

  const favorites = useSelector((state) => state.myFavorites)

  return (
    <div>
    <div>
            <select onChange={handleOrder}>
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">unknown</option>
            </select>
          </div>

          <div className="cards">

    {favorites.map((personaje) => {
      return (
                           
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={onClose}
          />
        
      )
    }
    )}
    </div>

    </div>
  )
}

export default Favorites

// function mapStateToProps(state){
//   return{
//      myFavorites:state.myFavorites
//   }
// }
 
// export default connect(mapStateToProps,null)(Favorites)
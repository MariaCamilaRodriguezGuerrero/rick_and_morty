import axios from "axios";

// export const addFav = (personaje)=>{
//     return { type: "ADD_FAV", payload: personaje }
// }

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
 
   return async (dispatch) => {
     try {
       const { data } = await axios.post(endpoint, character);
       dispatch({
         type: 'ADD_FAV',
         payload: data,
       });
     } catch (error) {
       console.log(error);       
     }
   };
 };

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character)
//        .then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };



// export const removeFav = (id)=>{
//     return { type: "REMOVE_FAV", payload: id }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try{
         const {data} = await axios.delete(endpoint)
         dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      })
   }catch(error){
      console.log(error)
   }
}}


export const filterCards = (gender) =>{
    return{type:"FILTER", payload:gender}
}

export const orderCards = (orden)=>{
    return{type:"ORDER", payload:orden}
}


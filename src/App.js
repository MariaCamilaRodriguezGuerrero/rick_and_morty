import './App.css';
import axios from "axios"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Cards from './components/Cards.jsx';
import About from './components/About';
import Nav from './components/Nav';
import Details from './components/Detail'
import Form from './components/Form';
import Favorites from "./components/Favorites"
import { useState, useEffect } from 'react';
import { removeFav } from './redux/actions';



function App(props) {
     
   const [access, setAccess] = useState(false);

   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'Hola123';
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const navigate = useNavigate();
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name && !characters.find(char => char.id === data.id)) {
               setCharacters((oldChars) => [...oldChars, data])
            } else { window.alert("Este personaje ya esta agregado") }

         })
         .catch(function (error) {
            console.log(error);
            window.alert('¡No hay personajes con este ID!')
         })
   }

   
   const dispatch = useDispatch();
   function onClose(id) {
      setCharacters(characters.filter((char) => char.id !== id))
      dispatch(removeFav(id))

   }

   const location = useLocation();
   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path='/detail/:id' element={<Details />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route />
         </Routes>
      </div>
   );
}

export default App;

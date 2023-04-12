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

   // const EMAIL = 'ejemplo@gmail.com';
   // const PASSWORD = 'Hola123';   
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/'
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home')
      } catch (error) { console.log("información incorrecta") }
   }


   const navigate = useNavigate();
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([])

   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //       .then(({ data }) => {
   //          if (data.name && !characters.find(char => char.id === data.id)) {
   //             setCharacters((oldChars) => [...oldChars, data])
   //          } else { window.alert("Este personaje ya esta agregado") }

   //       })
   //       .catch(function (error) {
   //          console.log(error);
   //          window.alert('¡No hay personajes con este ID!')
   //       })
   // }

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name && !characters.find(char => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data])
         } else { window.alert("Este personaje ya esta agregado") }
      } catch (error) {
         console.log(error)
         window.alert('¡No hay personajes con este ID!')
      }
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

import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("")
   function handleChange(event) {
      setId(event.target.value)
   }

   function handleSearch(){
      onSearch(id);
      setId("");
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}

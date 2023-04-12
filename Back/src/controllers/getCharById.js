const axios = require ("axios")

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req,res)=>{
    const {id} =req.params
    try{        
        const result =await axios.get(`${URL}/${id}`)
        if(result){
            const{status,name,species,origin,gender,image}=result.data
            res.status(200).json(
                {
                    id,
                    key:id,
                    status:status,
                    name:name,
                    species:species,
                    origin:origin,
                    gender:gender,
                    image:image    
                }) 
        } else{
            res.status(404).send("Not found")
        }                
    } catch(error){res.status(500).json({error:error.message})}
}


module.exports={getCharById}


// const getCharById = (req,res)=>{
//     const {id} =req.params
//     console.log(req.params)
//     axios
//     .get(`${URL}/${id}`)
//     .then((response)=>{
//         if(response){
//             const{status,name,species,origin,gender,image}=response.data            
//             const character={
//                 id,
//                 status:status,
//                 name:name,
//                 species:species,
//                 origin:origin,
//                 gender:gender,
//                 image:image

//             }            
//             res.status(200).json(character)
//         } else {res.status(404).send("Not fount")}
//     })
//     .catch((err)=>{res.status(500).json({error:err.message})})
// }

// const axios = require ("axios")

// const getCharById=(res, id)=>{
// axios(`https://rickandmortyapi.com/api/character/${id}`)
// .then((response)=>{
    
//     const { name, gender, species, origin, image, status } = response.data
//     const personaje ={
//         id:id,
//         name:name,
//         gender:gender,
//         species:species,
//         origin:origin,
//         image:image,
//         status:status
//     }
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.end(JSON.stringify(personaje))
// })
// .catch(err=>{
//     res.writeHead(500,{"Content-Type":"text/plain"})
//     res.end(err.message)
// })}

// module.exports={getCharById}
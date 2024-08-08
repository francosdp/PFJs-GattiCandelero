console.log("Hola Soy Fetch")

fetch("../data/distances.json")
.then( (response) =>response.json())
.then( (data) =>{
    console.log(data)
})
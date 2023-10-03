window.onload = function(){
    fetch ("https://api.giphy.com/v1/gifs/trending?api_key=&limit=25&rating=g")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(informacion){
        console.log(informacion)
    })
    .catch(function(error){
        alert("Error! Intente mas tarde.")
    })
}

    // CLASE 17 EJERCICIO 2
    let div = document.querySelector("#temperatura")
    function peticionClima(json){
        console.log(json)
        div.textContent = json.main.temp
        document.querySelector("#temperaturamaxima").textContent = json.main.temp_max
        document.querySelector("#temperaturaminima").textContent = json.main.temp_min
        const humedad = document.querySelector("#humedad").textContent = json.main.humidity
        document.querySelector("#humedad").innerHTML = `${humedad}%`
        const visibilidad = document.querySelector("#visibilidad").textContent = json.visibility
        document.querySelector("#visibilidad").innerHTML = `${visibilidad} mts`
     
    }
    // div.addEventListener("mouseenter", peticionClima )
     
//                                                           ciudad      &units=metric para cambio a grados y id de la api
    fetch("https://api.openweathermap.org/data/2.5/weather?q= buenos aires&units=metric&appid=6245e636fa5b56f199a78e635b7010d0")
    .then(response=> response.json())// cuando responde la api lo transforma en json
    .then(json => peticionClima(json)) // a mi funcion le asigno el json

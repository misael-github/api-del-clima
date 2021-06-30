let div = document.querySelector("#temperatura");
function peticionClima(json) {
  let ciudad = document.querySelector("#user-city").value;
  document.querySelector("#city-display").textContent = ciudad;
  const temperatura = (div.textContent = json.main.temp);
  document.querySelector("#temperatura").innerHTML = `${temperatura} °C`;
  const tempmin = (document.querySelector("#temperaturamaxima").textContent =
    json.main.temp_max);
  document.querySelector("#temperaturamaxima").innerHTML = `${tempmin} °C`;
  const tempmax = (document.querySelector("#temperaturaminima").textContent =
    json.main.temp_min);
  document.querySelector("#temperaturaminima").innerHTML = `${tempmax} °C`;
  const humedad = (document.querySelector("#humedad").textContent =
    json.main.humidity);
  document.querySelector("#humedad").innerHTML = `${humedad}%`;
  const visibilidad = (document.querySelector("#visibilidad").textContent =
    json.visibility);
  document.querySelector("#visibilidad").innerHTML = `${visibilidad} mts`;
}
const btnBuscar = document.querySelector("#buscar");
btnBuscar.addEventListener("click", peticionClima);
// div.addEventListener("mouseenter", peticionClima )

//ciudad      &units=metric para cambio a grados y id de la api
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=6245e636fa5b56f199a78e635b7010d0`
)
  .then((response) => response.json()) // cuando responde la api lo transforma en json
  .then((json) => peticionClima(json)); // a mi funcion le asigno el json

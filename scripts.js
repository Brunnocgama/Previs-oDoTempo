

const key = "fbc5115594c19d15bc5b36a8c9ecf459"

function dataOnScreen(dados) {
    document.querySelector(".City").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataOnScreen(dados)
}

function iPressedTheButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)

}











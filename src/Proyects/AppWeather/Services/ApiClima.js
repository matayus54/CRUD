import axios from 'axios'

const getClima = async (latitud,longitud) =>{
    const apiKey = "e1207e30afb3465036fa7778aa72f63a"
    const lat = latitud         //-13.5206 
    const lon = longitud        //-71.9759
    const metrica="imperial" //Farenheit metric centigrados
    const language="es"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${metrica}&lang=${language}`
    
    const req = await axios.get(URL);
    return req

    //para los iconos http://openweathermap.org/img/wn/02d@2x.png
}

export default getClima
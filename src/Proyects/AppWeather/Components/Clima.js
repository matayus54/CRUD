import { useEffect, useState } from "react"
import GetLocation from '../Services/ApiGeolocalizacion.js';
import getClima from '../Services/ApiClima.js';
import '../../Components/css/Estilos.css';

const Clima = () => {

    const latitud=GetLocation()[0]
    const longitud=GetLocation()[1]
    const [temperatura, setValor] = useState(0)

    const [clima, setClima] = useState({
        humedad:"",
        tipoClima:"",
        climaDescripcion:"",
        imagen:"",
        velocidadViento:"",
        temperaturaFarenheit:"",
        temperaturaCentrigrados:"",
        ciudad:"",
        pais:"",

    })


    useEffect(() => {
        getClima(latitud,longitud)
            .then(response => {
                /* console.log(response.data)*/

                setClima({
                    humedad:response.data.main.humidity + "% de humedad",
                    tipoClima:response.data.weather[0].main,
                    climaDescripcion:response.data.weather[0].description,
                    imagen:response.data.weather[0].icon,
                    velocidadViento:"viento " + response.data.wind.speed+" m/s",
                    temperaturaFarenheit:response.data.main.temp+" °F",
                    temperaturaCentrigrados:Number((response.data.main.temp-32)/1.8).toFixed(2)+" °C",
                    ciudad:response.data.name,
                    pais:response.data.sys.country,
            
                })
            })
            .catch(err => {
                /* console.log(err) */
            })
    }, [latitud,longitud])


    function cambiarTemperatura(){
        if(temperatura){
            setValor(0)
        }else{
            setValor(1)
        }
    }

    return (
        <>
            <div className="containerColumnas estiloRedondeado transparente">
                <p>{`ciudad: ${clima.ciudad} - ${clima.pais}` }</p>
            <p>{`${clima.tipoClima}` }</p>
            
                <div className="containerFilas">
                    <div>    
                            <p>{`${clima.humedad}` }</p>
                            <p>{`${clima.velocidadViento}` }</p>
                            
                    </div>

                    <div>
                        <div className="containerFilas">
                        {clima.imagen?<img src={`http://openweathermap.org/img/wn/${clima.imagen}@2x.png`}></img>:<p>charging</p>}
                        <p onClick={cambiarTemperatura}>
                            {temperatura?`${clima.temperaturaFarenheit}`:`${clima.temperaturaCentrigrados}`}
                            </p>
                        </div>
                        <p>{` ${clima.climaDescripcion} ` }</p>
                    </div>
                    
                </div>
            </div>
            <br/>
            <p>click in the temperature for change to grades or farenheit</p>
        </>
    )
}

export default Clima
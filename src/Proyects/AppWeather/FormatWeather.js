import Clima from './Components/Clima.js';
import Reloj from './Components/Reloj.js';
import '../Components/css/Estilos.css';
function FormatWeather() {
    return (
        <div className=' '>
            <Clima/>
            <Reloj/>
        </div>
    );
}

export default FormatWeather;
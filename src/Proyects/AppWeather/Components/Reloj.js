import '../../Components/css/Estilos.css';
import { useEffect, useState } from "react"
function Reloj() {


    const [reloj, setReloj] = useState({
        dias:"",
        Horas:"",
        minutos:"",
        segundos:"",
        ZonaHoraria:"",
    })


    const calendario = () =>{
            let options = { weekday: 'long'}
            let t=new Date()
            let horas=t.getHours()
            let horas24=horas
            let zonaHoraria="am"
            if (horas>12) {
                horas=horas-12
                zonaHoraria="pm"
            }
            
            setReloj({
                dias:new Intl.DateTimeFormat('es-PE', options).format(t),
                Horas:horas,
                minutos:t.getMinutes(),
                segundos:t.getSeconds(),
                ZonaHoraria:zonaHoraria,
            })
        }

        const mostrarHora= () =>{
            setInterval(()=>{
                calendario()
            },1000)
        };

        mostrarHora()


    return (
        <div >
            Hoy es {reloj.dias} y son las {reloj.Horas}:{reloj.minutos}:{reloj.segundos} {reloj.ZonaHoraria}
        </div>
    );
}

export default Reloj;
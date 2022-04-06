import { useEffect, useState } from "react"

const GetLocation =  () =>{

    const [status, setStatus] = useState({
        latitud:"",
        longitude:"",
    })


    useEffect(() => {
    function success(position) {
            setStatus({
                latitud:position.coords.latitude,
                longitude:position.coords.longitude
            })
    }
        
    function error() {
        alert('Sorry, no position available.');
        }
        
    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
        };

    
        if(!navigator.geolocation) {
            console.log("error");
        } else {
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    
    }, [navigator.geolocation])    

    //para los iconos http://openweathermap.org/img/wn/02d@2x.png

/* return( <>
    <GetClima latitud={status.latitud} longitud={status.longitude}/>
    </>
    ) */
    return [status.latitud,status.longitude]
}

export default GetLocation
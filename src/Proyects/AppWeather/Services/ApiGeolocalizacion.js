import { useEffect, useState } from "react";
import GetClima from "./ApiClima.js";

const GetLocation = () => {
  const [status, setStatus] = useState({
    latitud: "",
    longitude: "",
  });

  useEffect(() => {
    function success(position) {
      setStatus({
        latitud: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      alert("Sorry, no position available.");
    }

    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    if (!navigator.geolocation) {
      console.log("error");
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);
  /*
    const datosMetricos = () => <GetClima latitud={status.latitud} longitud={status.longitude} /> 

    datosMetricos() 


return(
    <>
        { <GetClima latitud={status.latitud} longitud={status.longitude}/> }
    </>
    ) 
*/
  return [status.latitud, status.longitude];
};

export default GetLocation;

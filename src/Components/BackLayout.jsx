import { useEffect, useState } from "react";
import { useStateContext } from "../Context";
import Clear from "/Backs/Clear.jpg";                                                    //Done
import Cloudy from "/Backs/Cloudy.jpg";                                                  //Done
import Fog from "/Backs/Fog.jpg"                                                         //Done
import Rain from "/Backs/Rain.jpg";                                                      //Done
import Snow from "/Backs/Snow.jpg";                                                      //Done
import Stormy from "/Backs/Stormy.jpg";                                                  //Done



function BackLayout() {

    const { weather } = useStateContext()
    const [image, setimage] = useState(Rain);

    useEffect(() => {
        if (weather.conditions) {
            let imageString = weather.conditions
            if (imageString.toLowerCase().includes('clear')) {
                setimage(Clear)
            }
            else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
                setimage(Rain)
            }
            else if (imageString.toLowerCase().includes('cloud')) {
                setimage(Cloudy)
            }
            else if (imageString.toLowerCase().includes('snow')) {
                setimage(Snow)
            }
            else if (imageString.toLowerCase().includes('fog')) {
                setimage(Fog)
            }
            else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
                setimage(Stormy)
            }
        }

    }, [weather])


    return (
        <div>
            <img src={image} alt="weather_image" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
        </div>
    );
}

export default BackLayout;
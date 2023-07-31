import { useState, useEffect } from "react";
import cloud from "/Icons/cloud.png";
import fog from "/Icons/fog.png";
import rain from "/Icons/rain.png";
import snow from "/Icons/snow.png";
import storm from "/Icons/storm.png";
import sun from "/Icons/sun.png";
import windy from "/Icons/windy.png";



function MiniCard({ time, temp, iconString }) {

    const [icon, seticon] = useState(sun)

    useEffect(() => {
        if (iconString) {
            if (iconString.toLowerCase().includes('clear')) {
                seticon(cloud)
            }
            else if (iconString.toLowerCase().includes('rain')) {
                seticon(rain)
            }
            else if (iconString.toLowerCase().includes('cloud')) {
                seticon(sun)
            }
            else if (iconString.toLowerCase().includes('snow')) {
                seticon(storm)
            }
            else if (iconString.toLowerCase().includes('fog')) {
                seticon(fog)
            }
            else if (iconString.toLowerCase().includes('thunder')) {
                seticon(snow)
            }
            else if (iconString.toLowerCase().includes('wind')) {
                seticon(windy)
            }
        }
    }, [iconString])


    return (
        <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
            <p className=" text-center ">
                {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
            </p>

            <hr />

            <div className='w-full flex justify-center items-center flex-1'>
                <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
            </div>

            <p className='text-center font-bold'>{temp}&deg;C</p>
        </div>
    );
}

export default MiniCard;
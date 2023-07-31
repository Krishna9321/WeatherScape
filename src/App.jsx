import { IconBase } from 'react-icons';
import './App.css'
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from 'react';
import { useStateContext } from './Context';
import BackLayout from './Components/BackLayout';
import WeatherCard from "./Components/WeatherCard";
import MiniCard from './Components/MiniCard';
import Credits from './Components/Credits';


function App() {

    const [input, setinput] = useState("");
    const { weather, setplace, values, location, place } = useStateContext()

    const submitcity = () => {
        setplace(input)
        setinput('')
    }

    return (
        <div className=" flex flex-col w-full h-screen px-8 justify-between">
            <div>
                <nav className=" w-full flex p-3 justify-between items-center">
                    <h1 className='font-bold tracking-wide text-4xl text-black'>Weather App</h1>

                    <div className='bg-gray-500 w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
                        <HiOutlineSearch size={'1.4rem'} />
                        <input type="text" placeholder='Search City' className='focus:outline-none w-full bg-gray-500 text-[#212121] text-lg'
                            value={input} onChange={e => setinput(e.target.value)}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter')
                                    submitcity()
                            }}
                        />
                    </ div>
                </nav>

                <BackLayout></BackLayout>

                <main className='w-full flex flex-wrap gap-8 py-8 px-[10%] items-center justify-center'>
                    <WeatherCard
                        place={location}
                        windspeed={weather.wspd}
                        humidity={weather.humidity}
                        temperature={weather.temp}
                        heatIndex={weather.heatindex}
                        iconString={weather.conditions}
                        conditions={weather.conditions}
                    />

                    <div className='flex justify-center flex-wrap w-[60%] Wrap'
                    >
                        {
                            values?.slice(1, 7).map(day => {
                                return (
                                    <MiniCard
                                        key={day.datetime}
                                        time={day.datetime}
                                        temp={day.temp}
                                        iconString={day.conditions}
                                    />
                                );
                            })
                        }
                    </div>
                </main>
            </div>

            <div className=' flex w-full justify-end align-text-bottom'>
                <Credits />
            </div>
        </div>
    );
}

export default App

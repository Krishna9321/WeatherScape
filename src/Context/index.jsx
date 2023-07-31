import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const [weather, setweather] = useState({})
    const [values, setvalues] = useState([])
    const [place, setplace] = useState('Delhi')
    const [location, setlocation] = useState('')

    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                location: place,
                aggregateHours: '24',
                shortColumnNames: 0,
                unitGroup: 'metric',
                contentType: 'json'
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options);
            const thisData = Object.values(response.data.locations)[0]
            console.log(thisData)
            setlocation(thisData.address)
            setvalues(thisData.values)
            setweather(thisData.values[0])
        }
        catch (e) {
            console.error(e);
            alert('No Such Place exists')
        }
    }

    useEffect(() => {
        // fetchWeather()
    }, [place])

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <StateContext.Provider value={{ weather, setplace, values, location, place }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
import {DEFAULT_PEOPLE_COUNT, AppGroupedButtons} from "./components/App.Grouped.Buttons";
import {useState} from "react";
import "./App.css";
import {AppHotels} from "./components/App.Hotels";
import {TextField} from "@mui/material";
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import {AppNavigation} from "./components/App.Navigation";

function App() {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [peopleCount, setCount] = useState(DEFAULT_PEOPLE_COUNT);
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());

    return (
        <>
            <div className="main">
                <AppNavigation/>
                <div className="grid-container-search">
                    <div className="grid-item-search">
                        <TextField
                            id="country_value"
                            variant="outlined"
                            fullWidth
                            label="Country"
                            onChange={e => setCountry(e.target.value)}/>
                    </div>
                    <div className="grid-item-search">
                        <TextField
                            id="city_value"
                            variant="outlined"
                            fullWidth
                            label="City"
                            onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div className="grid-item-search">
                        <DatePicker className="width-100" onChange={setFrom} value={from}/>
                    </div>
                    <div className="grid-item-search">
                        <DatePicker onChange={setTo} value={to}/>
                    </div>
                    <div className="grid-item-search padding-0">
                    </div>
                    <div className="grid-item-search">
                        <span className="person-span">Number of Person:</span>
                    </div>
                    <div className="grid-item-search  padding-0">
                        <AppGroupedButtons handleClick={setCount}></AppGroupedButtons>
                    </div>
                </div>
            </div>
            <AppHotels searchParams={{city, country, peopleCount, from, to}}/></>

)
    ;
}

export default App;
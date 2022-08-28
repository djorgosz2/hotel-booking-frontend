import {useState} from "react";
import {Button} from "@mui/material";
import {FormDialog} from "./Booking.Dialog";

export const AppHotels = ({searchParams}) => { //:interface or type can be used for that param but then convert needed to string
    const [hotels, setHotels] = useState([]);
    const handleSubmit = () => {
        const {from, peopleCount, to} = searchParams;
        if (from && to && peopleCount) {
            const url = (
                'http://localhost:4000/hotels?' +
                new URLSearchParams(searchParams).toString()
            );
            fetch(url)
                .then((response) => response.json())
                .then((result) => {
                    setHotels(result)
                });
        }
    };
    async function handleBooking (data) {
        ['city', 'country','hotelName'].forEach(e => delete data[e]);
        const rawResponse = await fetch('http://localhost:4000/booking', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await rawResponse.json();
    };
return (<>
    <div className="margin-left padding-bottom padding-top-1">
        <Button variant="contained" onClick={handleSubmit}>Search Hotel</Button>
    </div>
    <div className="grid-container">
                {hotels.map((item, i) => {
                    return (
                            <div className="grid-item">
                            <div className="card">
                                <img src={"./hotels/hotel"+(i+1)%12+".jpg"} alt="Avatar"></img>
                                <div className="container">
                                    <b>{item['name']}</b>
                                    <b>{item['city']}</b><br/>
                                    {item['country']}<br/>
                                    <b>{item['price']}€<br/></b>
                                    {item['address']}<br/>
                                    <FormDialog className="padding-top-1" data={Object.assign(searchParams,{hotelId:item['id'], hotelName:item['name']})} handleBooking={handleBooking}></FormDialog>
                                </div>
                            </div>
                            </div>
                    )
                })
                }
        </div></>
)

};
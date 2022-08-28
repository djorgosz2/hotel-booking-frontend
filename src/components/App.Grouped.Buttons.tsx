import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
export const DEFAULT_PEOPLE_COUNT = 1;

export const AppGroupedButtons = ({handleClick}) => {
    const [counter, setCounter] = useState(DEFAULT_PEOPLE_COUNT);

    useEffect(()=> {
        handleClick(counter);
    },[counter,handleClick]);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };
    return (
        <div>
            <Button onClick={handleIncrement}>+</Button>
            {counter > 0 && <Button disabled>{counter}</Button>}
            {counter > 0 && <Button onClick={handleDecrement}>-</Button>}
        </div>

    );
}

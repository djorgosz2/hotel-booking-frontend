import React from 'react';
import {render, screen, waitFor,fireEvent} from '@testing-library/react';
import App from '../App';
import "jest-canvas-mock"
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";

//separate to units
test('list and book', async () => {
    render(<App />);
    fireEvent.click(screen.getByText('Search Hotel'))
    userEvent.click(( await waitFor( () =>  screen.getAllByText("Book Now")[0])))
    const nameInput=screen.getByRole("textbox")
    console.log(nameInput)
    fireEvent.change( nameInput, {target: {value: "Test Name"}})
    expect(nameInput['value']).toBe('Test Name')
    userEvent.click( screen.getByText("Book"))
    await screen.findByText("Completed!")
});

import {render, screen, act, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../MockData/RestroListMockData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=>{
      return Promise.resolve(MOCK_DATA);
    }
  })
})
/* fetch() inside body component doesnot identified by the jsdom, because fetch() 
  belongs to the browser and jsdom donot containts the superpowers of browser.
 so, while rendering body component error occures. To over come this we have to write mock 
 fetch() function as above code.
*/
/* If a component having fetch or performing state updates it should be 
 wrapped insed act() function. This act() function returns a Promise. and take a 
 callback function that returns render() method*/ 

it("should search ResList for Tiffins", async ()=>{
  await act ( async () => render(
    <BrowserRouter>
    <Body/>
  </BrowserRouter>
));

const searchButton = screen.getByRole("button", {name: "Search"});

const cardsBeforeSearch = screen.getAllByTestId("ResCard");
expect(cardsBeforeSearch.length).toBe(8);

const searchInput = screen.getByTestId("searchInput");
fireEvent.change(searchInput, {target:{ value: "Tiffins"}});// target object simulates what we type in the inout box ex: tiffins
fireEvent.click(searchButton);

const cardsAfterSearch = screen.getAllByTestId("ResCard");

expect(cardsAfterSearch.length).toBe(4);

});
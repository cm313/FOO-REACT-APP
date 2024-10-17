import {render, screen, act} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../MockData/RestroMenuMockData.json";

global.fetch = jest.fn(()=>
 Promise.resolve({
  json : ()=> Promise.resolve(MOCK_DATA),
 }),
);

describe("should accordians work in the menu page", ()=>{

it("should render items in an accordian", async ()=>{
await act( async ()=> render(<RestaurantMenu/>));
});

//Quering
const accordHeader = screen.getByText("Biryani,Chinese");

});
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
  });
});

it("should display Top Rated Restaurants", async ()=>{
 await act(async ()=>{
  render(
    <BrowserRouter>
  <Body/>
  </BrowserRouter>
);
  });
 
  const topRatedButton = screen.getByTestId("topRated");
  const restroBeforeClick  = screen.getAllByTestId("ResCard");
  expect(restroBeforeClick.length).toBe(8);
  fireEvent.click(topRatedButton);
 
   const restroAfterClick = screen.getAllByTestId("ResCard");

   expect(restroAfterClick.length).toBe(7);
});
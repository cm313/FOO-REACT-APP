import {render, screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../MockData/RestroCardMockData.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props data", ()=>{

  render(<RestaurantCard resData={MOCK_DATA} />);

  const cardName = screen.getByText("President Dhaba");

  expect(cardName).toBeInTheDocument();
})

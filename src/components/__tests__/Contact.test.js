import{render, screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


describe("Tests for ContactUs page ", ()=>{
test("should render the component on the page", ()=>{
    
   render(<ContactUs/>);

   //Querying
  const city = screen.getByText("Hyderabad");
    //Assertion
   expect(city).toBeInTheDocument();
});

test("should contain headings", ()=>{
   render(<ContactUs/>)

   const headings = screen.getAllByRole("heading");
   expect(headings.length).toBe(4);
})

test("should contain textboxes", ()=>{
   render(<ContactUs/>)
   const textbox = screen.getByRole("textbox");
   expect(textbox).toBeInTheDocument();
})
});
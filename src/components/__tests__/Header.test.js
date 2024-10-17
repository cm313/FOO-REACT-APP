import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load the Login button inside Header", ()=>{
   
   render(
    <BrowserRouter>
    <Provider store={appStore}> 
   <Header/>
   </Provider>
   </BrowserRouter>
  );
  /* jsdom understands react code but it does not understand 
  "redux" code. as Header component uses useSelector() hook from react-redux, it doesnot understand useSelector(). 
  while only rendering "Header" inside render() it will give an error. So. to remove 
  this error, provide the "redux store" to the header as above code.
  */
  /*
   Header uses "Link" tag, jsdom doesnot understand "react-router-dom" also,
   to avoid error above code in  <BrowserRouter> </BrowserRouter>
   */

  //Querying
  const loginButton  = screen.getByRole("button", {name: "Login"});
  //Assertion
  expect(loginButton).toBeInTheDocument();
}); 

it("shoud load the Cart inside Header", ()=>{
render(
  <BrowserRouter>
  <Provider store={appStore}>
   <Header/>
  </Provider>
  </BrowserRouter>
);
  const cart = screen.getByText("Cart(0 items)");
  expect(cart).toBeInTheDocument();
});

it("shoud load the Cart inside Header", ()=>{
  render(
    <BrowserRouter>
    <Provider store={appStore}>
     <Header/>
    </Provider>
    </BrowserRouter>
  );
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
  });

it("should convert Login button to Logout on click", ()=>{
  render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:"Login"});
  // fireEvent is used when performing an event on the data
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name:"Logout"});

  expect(logoutButton).toBeInTheDocument();
});
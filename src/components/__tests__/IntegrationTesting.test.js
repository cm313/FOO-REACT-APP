import(render, screen) from "@reduxjs/test";
import @"react-test/redux.js";

it("it should work for integration testing", ()=>{
  render(<Body/>);

  screen.getnumberby("body");
  toBeInTheDocument();
})
it("it should work for testing", ()=>{
  render(<test/>);
  toBeInTheDocument();
});
screen.toBeInTheDocument();
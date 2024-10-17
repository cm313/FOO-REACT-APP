import {sum} from "../sum";
import "@testing-library/jest-dom";

test("sum function should calculate the sum of given two numbers", ()=>{
  const result = sum(5,3);
 
   //below line of code is called Assertion
  expect(result).toBe(8);
})


import '@testing-library/jest-dom'
import Incomes from '../pages/Incomes'
import { render,screen, fireEvent} from '@testing-library/react';



test('renders options elements', ()=>{
  render(<Incomes/>);
  const selectElement=screen.getAllByTestId("option");
  expect(selectElement).toHaveLength(8);
})

test('salary title input should be rendered', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByPlaceholderText(/salary title/i);
  expect(inputElement).toBeInTheDocument();
})

test('salary amount is rendered', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByPlaceholderText(/salary amount/i);
  const testValue="10.100"
  fireEvent.change(inputElement,{target:{value:testValue}})
  expect(inputElement).toHaveValue(testValue);
})
test('input date is rendered', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByPlaceholderText(/select date/i);
  expect(inputElement).toBeInTheDocument();
})

test('select element is rendered', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByTestId('select');
  expect(inputElement).toBeInTheDocument();
})

test('reference is empty', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByPlaceholderText(/add reference/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue("");
})

test('button is rendered', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByRole("button");
  expect(inputElement).toBeInTheDocument();
})

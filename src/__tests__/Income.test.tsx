import '@testing-library/jest-dom'
import Incomes from '../pages/Incomes'
import { render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'




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

// test('salary amount is rendered', ()=>{
//   render(<Incomes/>);
//   const inputElement=screen.getByPlaceholderText(/salary amount/i);
//   userEvent.type(inputElement, '');
//   userEvent.tab();
//   let errors=screen.getByText("required");
//   expect(errors).toBeInTheDocument();

//   userEvent.clear(inputElement);
//   userEvent.type(inputElement, '-10f');
//   userEvent.tab(); // Again, move to the next input or simulate another action
  
//   errors = screen.getByText("only digits");
//   expect(errors).toBeInTheDocument();
// })
test('input date is rendered', ()=>{
  render(<Incomes/>);
  const inputElement=screen.getByPlaceholderText(/select date/i);
  userEvent.click(inputElement);
  inputElement.blur();
   
  const errorMessage = screen.getByText("required");
  expect(errorMessage).toBeInTheDocument();
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

import Layout from "../components/Layouts/Layout"
import MainInput from "../components/forms/MainInput"
import { useForm } from "react-hook-form"

const Incomes = () => {
  const {register, }=useForm();
  return (
    <>
     <Layout title='income' mainTitle='Incomes'>
         <form className='flex flex-col gap-4'>
          <MainInput type='text' name='salary' id='salary' placeholder='Salary Title'/>
          <MainInput type='text' name='amount' id='amount' placeholder='Salary Amount'/>
          <input type='date' id='date' {...register('date')} placeholder='select date' />
          <select {...register('option')}>
            <option disabled selected>Select Option</option>
            <option value='salary'>Salary</option>
            <option value='freelancing'>Freelancing</option>
            <option value='investments'>Investments</option>
            <option value='stocks'>Stocks</option>
            <option value='bitcins'>Bitcoins</option>
            <option value='bank transfer'>Bank transfer</option>
            <option value='other'>other</option>
          </select>
          <MainInput id='reference' name='reference' placeholder='add reference' type='text'/>
          <button>Add Income</button>
         </form>
         <div>bla</div>
     </Layout>
    </>
  )
}

export default Incomes



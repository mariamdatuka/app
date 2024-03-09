import Layout from "../components/Layouts/Layout"
import MainInput from "../components/forms/MainInput"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import MainButton from "../components/forms/MainButton"
import axios from 'axios';


const Incomes = () => {
  const schema = yup
  .object({
    salary: yup.string().required('required'),
    amount: yup.string().required('required').matches(/^[0-9]+(\.[0-9]*)?$/,"only digits"),
    date:yup.string().required('required'),
    option:yup.string().required('required'),
    reference:yup.string()
  });
  const methods=useForm(
    {
      resolver: yupResolver(schema),
      defaultValues: {
        salary: "",
        amount: "",
        date: "",
        option: "",
        reference:""
      },
      mode: "all",
    }
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = methods;
  const onSubmit = async(data:any) => {
    console.log(data);
    reset();
    try {
      const response=await axios.get('https://jsonplaceholder.typicode.com/users/')
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

 
  return (
    <>
     <Layout title='income' mainTitle='Incomes'>
      <FormProvider {...methods}>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <MainInput type='text' name='salary' id='salary' placeholder='Salary Title' error={errors.salary?.message}/>
          <MainInput type='text' name='amount' id='amount' placeholder='Salary Amount' error={errors.amount?.message}/>
          <div className='relative w-full'>
          <input type='date' id='date' {...register('date')} placeholder='select date' className='px-2 py-1  w-full rounded-md  bg-lightbg border-2 border-white'/>
          <p data-testid='date'className='text-xs text-red absolute'>{errors?.date?.message}</p>
          </div> 
          <div className='relative self-end'>
          <select {...register('option')} id='option' name='option' className=' p-1 rounded-md   bg-lightbg border-2 border-white' defaultValue='' data-testid='select'>
            <option value='' disabled data-testid='option' >Select Option</option>
            <option value='salary'data-testid='option'>Salary</option>
            <option value='freelancing'data-testid='option'>Freelancing</option>
            <option value='investments' data-testid='option'>Investments</option>
            <option value='stocks'data-testid='option'>Stocks</option>
            <option value='bitcins' data-testid='option'>Bitcoins</option>
            <option value='bank transfer' data-testid='option'>Bank transfer</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
            <option value='other' data-testid='option'>other</option>
          </select>
          <p className='text-xs text-red absolute'>{errors.option?.message}</p>
          </div>
          <MainInput id='reference' name='reference' placeholder='add reference' type='text' error={errors.reference?.message}/>
          <MainButton text='Add income' type='submit' classNames='self-start'/>
         </form>
      </FormProvider>
       
         <div>bla</div>
     </Layout>
    </>
  )
}

export default Incomes



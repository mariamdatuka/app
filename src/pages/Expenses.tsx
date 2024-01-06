
import { FormProvider, useForm } from "react-hook-form"
import Layout from "../components/Layouts/Layout"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import MainInput from "../components/forms/MainInput"
import MainButton from "../components/forms/MainButton"


const Expenses = () => {
  const schema = yup
  .object({
    salary: yup.string().required('required'),
    amount: yup.string().required('required'),
    date:yup.string().required('required'),
    option:yup.string().required('required'),
    reference:yup.string().required('required')
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
  const onSubmit = (data:any) => {
    console.log(data)
    reset();
  }
 

  return (
    <>
     <Layout title='expense' mainTitle='Expenses'>
         <div>
          <FormProvider {...methods}>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <MainInput type='text' name='salary' id='salary' placeholder='Salary Title' error={errors.salary?.message}/>
          <MainInput type='text' name='amount' id='amount' placeholder='Salary Amount' error={errors.amount?.message}/>
          <div className='relative w-full'>
          <input type='date' id='date' {...register('date')} placeholder='select date' className='px-2 py-1  w-full rounded-md  bg-lightbg border-2 border-white'/>
          <p className='text-xs text-red absolute'>{errors?.date?.message}</p>
          </div> 
          <div className='relative self-end'>
          <select {...register('option')} id='option' name='option' className=' p-1 rounded-md   bg-lightbg border-2 border-white' defaultValue='' >
            <option value='' disabled >Select Option</option>
            <option value='education'>Education</option>
            <option value='groceries'>Groceries</option>
            <option value='health'>Health</option>
            <option value='subscriptions'>Subscriptions</option>
            <option value='takeaways'>Takeaways</option>
            <option value='clothing'>Clothing</option>
            <option value='traveling'>Traveling</option>
            <option value='other'>Other</option>
          </select>
          <p className='text-xs text-red absolute'>{errors.option?.message}</p>
          </div>
          <MainInput id='reference' name='reference' placeholder='add reference' type='text' error={errors.reference?.message}/>
          <MainButton text='Add income' type='submit' classNames='self-start'/>
         </form>
          </FormProvider>
          
         </div>
         <div>bla</div>
     </Layout>
    </>
  )
}

export default Expenses
import Layout from "../components/Layouts/Layout"
import MainInput from "../components/forms/MainInput"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import MainButton from "../components/forms/MainButton"

const Incomes = () => {
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
  } = methods;
  const onSubmit = (data:any) => console.log(data)
 

  return (
    <>
     <Layout title='income' mainTitle='Incomes'>
      <FormProvider {...methods}>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <MainInput type='text' name='salary' id='salary' placeholder='Salary Title' error={errors.salary?.message}/>
          <MainInput type='text' name='amount' id='amount' placeholder='Salary Amount' error={errors.amount?.message}/>
          <input type='date' id='date' {...register('date')} placeholder='select date' />
          <p>{errors?.date?.message}</p>
          <select {...register('option')} value='selected'>
            <option disabled selected>Select Option</option>
            <option value='salary'>Salary</option>
            <option value='freelancing'>Freelancing</option>
            <option value='investments'>Investments</option>
            <option value='stocks'>Stocks</option>
            <option value='bitcins'>Bitcoins</option>
            <option value='bank transfer'>Bank transfer</option>
            <option value='other'>other</option>
          </select>
          <p>{errors.date?.message}</p>
          <MainInput id='reference' name='reference' placeholder='add reference' type='text' error={errors.reference?.message}/>
          <MainButton text='add income' type='submit'/>
         </form>
      </FormProvider>
       
         <div>bla</div>
     </Layout>
    </>
  )
}

export default Incomes



import Layout from "../components/Layouts/Layout"
import MainInput from "../components/forms/MainInput"


const Incomes = () => {
  return (
    <>
     <Layout title='income' mainTitle='Incomes'>
         <form className='flex flex-col gap-4'>
          <MainInput type='text' name='income' id='income' placeholder='text'/>
           
         </form>
         <div>bla</div>
     </Layout>
    </>
  )
}

export default Incomes
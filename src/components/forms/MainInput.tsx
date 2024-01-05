import { useFormContext } from "react-hook-form"

interface InputProps{
    placeholder?:string;
    error?:string;
    name:string;
    type:string;
    id:any;
}

const MainInput = ({placeholder, id, error, name, type='text'}:InputProps) => {
    const {register}=useFormContext();
  return (
    <>
    <div className='relative'>
    <input placeholder={placeholder} id={id} type={type} {...register(`${name}`)} className='px-2 py-1 rounded-sm'/>
    <p className='text-xs text-red absolute'>{error}</p>
    </div>
   
    </>
  )
}

export default MainInput



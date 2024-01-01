import { useForm } from "react-hook-form"

interface InputProps{
    placeholder?:string;
    error?:string;
    name:string;
    type:string;
    id:any;
}

const MainInput = ({placeholder, id, error, name, type='text'}:InputProps) => {
    const {register}=useForm();
  return (
    <>
    <div>
    <input placeholder={placeholder} id={id} type={type} {...register(`${name}`)}/>
    <p>{error}</p>
    </div>
   
    </>
  )
}

export default MainInput



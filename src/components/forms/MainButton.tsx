interface ButtonProps{
    text:string;
    type:"submit" | "button";
    onClick?:any;
    classNames?:any;
}

const MainButton = ({text, type, onClick, classNames}:ButtonProps) => {
  return (
    <>
     <button type={type} onClick={onClick} className={`border-none transition-all ease-in-out duration-300 bg-main hover:bg-hover rounded-xl text-lightbg p-2 ${classNames}`}>{text}</button>
    </>
  )
}

export default MainButton
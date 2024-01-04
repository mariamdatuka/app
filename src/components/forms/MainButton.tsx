interface ButtonProps{
    text:string;
    type:"submit" | "button";
    onClick?:any;
}

const MainButton = ({text, type, onClick}:ButtonProps) => {
  return (
    <>
     <button type={type} onClick={onClick} >{text}</button>
    </>
  )
}

export default MainButton
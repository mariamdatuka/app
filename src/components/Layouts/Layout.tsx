import React from "react";

interface Props{
    mainTitle:string;
    title:string;
    children: React.ReactNode;
  }
  
  const Layout = ({mainTitle,title, children}:Props) => {
    const childrenArray = React.Children.toArray(children);
    return (
      <>
       <div>
        <h1 className='text-dark text-3xl font-semibold'>{mainTitle}</h1>
        <div className='w-full mt-4 rounded-xl flex items-center justify-center h-16 bg-lightbg border-2 border-white'>
           <h3 className='font-semibold text-xl text-dark'>Total {title}:101010$</h3>
        </div>
        <section className='mt-4 grid grid-cols-6 gap-4'>
            <div className="col-span-2">
             {childrenArray[0]}
            </div>
            <div className="col-span-4">
               {childrenArray[1]}
            </div>
        </section>
       </div>
      </>
    )
  }
  
  export default Layout;
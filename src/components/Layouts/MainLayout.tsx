import { Outlet } from "react-router-dom"
import NavBar from "../NavBar.tsx/NavBar"

const MainLayout = () => {
  return (
    <>
      <section className='h-screen p-8 grid grid-cols-12 gap-10'>
            <div className='col-span-3'>
            <NavBar/>  
            </div>  
          <div className='col-span-9 h-full p-4  bg-mainBg rounded-xl border-2 border-white'>
             <Outlet/>
          </div>
      </section>
    </>
  )
}

export default MainLayout
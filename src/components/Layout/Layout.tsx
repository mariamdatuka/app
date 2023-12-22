import { Outlet } from "react-router-dom"
import NavBar from "../NavBar.tsx/NavBar"

const Layout = () => {
  return (
    <>
      <section className='grid grid-cols-12 gap-10'>
            <div className='col-span-3'>
            <NavBar/>  
            </div>  
          <div className='col-span-9'>
             <Outlet/>
          </div>
      </section>
    </>
  )
}

export default Layout
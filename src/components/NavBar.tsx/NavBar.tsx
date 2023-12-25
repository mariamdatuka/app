import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { FaArrowUpRightDots, FaArrowDownShortWide} from "react-icons/fa6";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <main className='h-full p-4 flex flex-col gap-10 items-start bg-mainBg rounded-xl border-2 border-white'>
       <div className="flex items-center gap-4">
          <FaUser className='w-6 h-6 fill-main'/>
           <h3 className='text-xl text-dark font-semibold'>Name</h3>
       </div>
       <nav className='flex flex-col gap-4'>
         <Link to='/'className='flex items-center gap-2'>
           <MdLeaderboard className='w-5 h-5 fill-main hover:fill-hover'/>
           <p className='text-sec transition-all ease-in-out hover:text-hover'>Dashboard</p>
         </Link>
         <Link to='/transactions' className='flex items-center gap-2'>
           <FaCreditCard className='w-5 h-5 fill-main  hover:fill-hover'/>
           <p className='text-sec transition-all ease-in-out hover:text-hover'>View Transactions</p>
         </Link>
         <Link to='/incomes' className='flex items-center gap-2'>
           <FaArrowUpRightDots className='w-5 h-5 fill-main  hover:fill-hover'/>
           <p className='text-sec transition-all ease-in-out hover:text-hover'>Incomes</p>
         </Link>
         <Link to='/expenses' className='flex items-center gap-2  hover:fill-hover'>
           <FaArrowDownShortWide className='w-5 h-5 fill-main  hover:fill-hover'/>
           <p className='text-sec transition-all ease-in-out hover:text-hover'>Expenses</p>
         </Link>
       </nav>
    </main>
  )
}

export default NavBar
import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { FaArrowUpRightDots, FaArrowDownShortWide} from "react-icons/fa6";



import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <main className='flex flex-col gap-10 justify-between bg-red'>
       <div className="flex items-center gap-4">
          <FaUser className='w-6 h-6'/>
           <h3 className='text-sm'>Name</h3>
       </div>
       <nav className='flex flex-col gap-4'>
         <Link to='/dashboard'className='flex items-center gap-2'>
           <MdLeaderboard className='w-5 h-5'/>
           <p>Dashboard</p>
         </Link>
         <Link to='/transactions' className='flex items-center gap-2'>
           <FaCreditCard className='w-5 h-5'/>
           <p>View Transactions</p>
         </Link>
         <Link to='/incomes' className='flex items-center gap-2'>
           <FaArrowUpRightDots className='w-5 h-5'/>
           <p>Incomes</p>
         </Link>
         <Link to='/expenses' className='flex items-center gap-2'>
           <FaArrowDownShortWide className='w-5 h-5'/>
           <p>Expenses</p>
         </Link>
       </nav>
    </main>
  )
}

export default NavBar
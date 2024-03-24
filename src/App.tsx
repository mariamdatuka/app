import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/Layouts/MainLayout"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Incomes from "./pages/Incomes"
import Expenses from "./pages/Expenses"
import Admin from "./components/Admin"


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index path='/' element={<Dashboard/>}/>
      <Route path='transactions' element={<Transactions/>}/>
      <Route path='incomes' element={<Incomes/>}/>
      <Route path='expenses' element={<Expenses/>}/>
      </Route>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </>
  )
}

export default App

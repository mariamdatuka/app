import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/Layouts/MainLayout"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Incomes from "./pages/Incomes"
import Expenses from "./pages/Expenses"


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
    </Routes>
    </>
  )
}

export default App

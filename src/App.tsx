import Layout from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Transactions from "./pages/Transactions"
import Dashboard from "./pages/Dashboard"

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index path='dashboard' element={<Dashboard/>}/>
      <Route path='transactions' element={<Transactions/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index path='/' element={<Dashboard/>}/>
      <Route path='transactions' element={<Transactions/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

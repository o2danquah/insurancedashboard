import React from 'react'
import { Route, Routes} from "react-router-dom"
import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import PolicyPage from './Pages/PolicyPage'
import PoliciesPage from './Pages/PoliciesPage'
import InsuranceClaim from './Pages/InsuranceClaim'
import { ContextProvider } from './Context/ContextAPI'

function App() {


  return (
<ContextProvider>
<Routes>
  // Public Route
   <Route path='/' element={<Login/>}/>

  // Protected Route
  <Route path="/Dashboard" element={<Dashboard/>}/>
  <Route path="/PoliciesPage" element={<PoliciesPage/>}/>
  <Route path="/PolicyPage/:id" element={<PolicyPage/>}/>
  <Route path="/InsuranceClaim" element={<InsuranceClaim/>}/>
              
 </Routes>
</ContextProvider>
  )
}

export default App

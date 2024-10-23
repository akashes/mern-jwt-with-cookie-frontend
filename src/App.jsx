
import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import { useContext, useEffect } from 'react'
import { UserContext } from './context/userAuthContext'

function App() {
const {auth}=useContext(UserContext)

  return (
    
<>
<Navigation/>
<Outlet>

</Outlet>
</>
  
  

 
  
  )
}

export default App

import React, { Children, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/userAuthContext'
const PrivateRoute = ({children}) => {
  console.log('inside private router')
    const{auth,loading}=useContext(UserContext)
    // const[val,setVal]=useState(auth?.isAuthenticated)
    // console.log(val)
console.log({loading})
    if(loading){
      return <div>loading...</div>
    }else{

      return auth.isAuthenticated? children: <Navigate to={'/login'}/>
    }
    
   
  
}

export default PrivateRoute

import React, { useState } from 'react'
import { serverUrl } from '../services/serverUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/userAuthContext'
import { loginUser } from '../services/userService'
const Login = () => {
    const{auth,setAuth}=useContext(UserContext)
    const navigate = useNavigate()
    const[userData,setUserData]=useState({
        email:"",
        password:""
    })

    const handleLogin=async(e)=>{
        console.log('handlelogin')
        e.preventDefault()
        const {email,password}=userData
        console.log(email,password)
        if(!email || !password) alert('please enter required credentials')
try {
    
    // const response =await axios.post(`${serverUrl}/api/user/login`,{email,password})
    const response = await loginUser({email,password})

    console.log(response)
    if(response?.success){
        setAuth({
            name:response.user.name,
            email:response.user.email,
            isAuthenticated:true

        })
      
        navigate('/profile')
        
    }
} catch (error) {
    console.log(error)
    
}


    }

  return (
    <div className='container h-screen bg-tertiary '>
        <h1>Login</h1>

        <div className='container  flex items-center justify-center h-screen' >
            <form action="" className='flex flex-col w-1/2 border gap-4' >
                <input onChange={(e)=>setUserData({...userData,email:e.target.value})} className='input' type="email" placeholder='email' />
                <input onChange={(e)=>setUserData({...userData,password:e.target.value})} className='input' type="password" placeholder='password' />
                <button onClick={handleLogin} className='bg-primary rounded-full text-white py-2 hover:scale-105 hover:bg-primary/95 duration-300 '>Login</button>
            </form>

        </div>

      
    </div>
  )
}

export default Login

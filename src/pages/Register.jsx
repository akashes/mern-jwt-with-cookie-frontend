import React, { useContext, useState } from 'react'
import { serverUrl } from '../services/serverUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/userService'
import { UserContext } from '../context/userAuthContext'
const Register = () => {
    const{auth,setAuth}=useContext(UserContext)
    const navigate = useNavigate()
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleRegister=async(e)=>{
        e.preventDefault()
        const {email,password,name}=user
        if(!email || !password || !name){
            
            alert('please enter required credentials')
        }else{
            try {
    
                // const response =await axios.post(`${serverUrl}/api/user/register`,{name,email,password})
              const response=  await registerUser({name,email,password})
                if(response){
                 

                    navigate('/login')
                    alert('successfully registered')
                }
             
            } catch (error) {
                console.log(error)
                
            }

        } 



    }

  return (
    <div className='container h-screen bg-tertiary '>
        <h1>Register</h1>

        <div className='container  flex items-center justify-center h-screen' >
            <form action="" className='flex flex-col w-1/2 border gap-4' >
                <input onChange={(e)=>setUser({...user,name:e.target.value})} className='input' type="text" placeholder='username' />
                <input onChange={(e)=>setUser({...user,email:e.target.value})} className='input' type="email" placeholder='email' />
                <input onChange={(e)=>setUser({...user,password:e.target.value})} className='input' type="password" placeholder='password' />
                <button onClick={handleRegister} className='bg-primary rounded-full text-white py-2 hover:scale-105 hover:bg-primary/95 duration-300 '>Register</button>
            </form>

        </div>

      
    </div>
  )
}

export default Register

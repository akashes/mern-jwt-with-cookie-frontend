import React, { useContext, useEffect } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { UserContext } from '../context/userAuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const AnimatedMenu = ({open,setOpen}) => {
    const navigate = useNavigate()
    const {auth,setAuth} =useContext(UserContext)

    const handleLogOut=async()=>{
        setAuth({
            name:"",
            email:"",
            isAuthenticated:false
        })

        setOpen(false)
        navigate('/')

        Cookies.remove('jwt')
    }
    // useEffect(()=>{

    // },[auth])
  return (
  <AnimatePresence mode='wait'>
    {
        open && <motion.div
        initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-100}}
        transition={{duration:.2}}
        className='absolute top-20 left-0 w-full h-screen z-20 lg:hidden'
        >
            <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
            <ul className='flex flex-col justify-center items-center gap-10'>
    <li>
        <Link to="/">Home</Link>
    </li>
    {
        auth.isAuthenticated ? (
            <>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li className='cursor-pointer' onClick={handleLogOut}>
                    Logout
                </li>
            </>
        ) : (
            <>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </>
        )
    }
</ul>
            </div>
        </motion.div>
    }

  </AnimatePresence>
  )
}

export default AnimatedMenu
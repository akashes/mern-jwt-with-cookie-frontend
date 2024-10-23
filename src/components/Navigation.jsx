import React, { useState } from 'react'
import { TbBrandAuth0 } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import AnimatedMenu from './AnimatedMenu';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userAuthContext';

const Navigation = () => {
    const {auth} = useContext(UserContext)
    

const [open, setOpen] = useState(false)
    return (
  <>
    <div className='container-fluid bg-tertiary h-20 flex justify-between px-16 items-center'>
        <div className="logo flex items-center gap-3">
            <TbBrandAuth0 className='text-5xl text-primary '/>
            <span className='text-primary font-semibold text-xl'>Auth App</span>

        </div>
        <ul className=' gap-5 md:gap-8 hidden md:flex'>
          <li><Link to="/">Home</Link></li> {/* Using Link for Home */}
          {auth? 
            <>
           <li><Link to="/profile">Profile</Link></li> {/* Using Link for Login */}
             
            </>
           : 
          <>
           <li><Link to="/login">Login</Link></li> {/* Using Link for Login */}
           <li><Link to="/logout">Register</Link></li> {/* Using Link for Logout */}
          
          </>
        }
        </ul>

        <div className=' md:hidden'>
            <RxHamburgerMenu onClick={()=>setOpen(!open)} /> 
        </div>

    </div>
<AnimatedMenu open={open} setOpen={setOpen} />
  </>

  )
}

export default Navigation

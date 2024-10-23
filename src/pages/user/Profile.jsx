import React, { useContext } from 'react'
import { UserContext } from '../../context/userAuthContext'

const Profile = () => {
  const{auth}=useContext(UserContext)

  return (
    <div>
      <h1>Welcome {auth?.name}</h1>
      
    </div>
  )
}

export default Profile

import React from 'react'
import { signOut } from 'next-auth/react'

const Logout = () => {
  return (
    <div onClick={() => signOut()}>Logout</div>
  )
}

export default Logout
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Clubhouse Chat</span>
      <div className='user'>
        <img src="https://pbs.twimg.com/profile_images/1564375315526275072/7Xnua7BM_400x400.jpg" alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
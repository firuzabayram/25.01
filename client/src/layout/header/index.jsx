import React from 'react'
import { Link } from 'react-router-dom'
import '../header/index.scss'

const Header = () => {
  return (
    <div className='umumi'>

        <div className='sagnavbar'>
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" />
            
        </div>
        <h1>Course</h1>
        <div className='solnavbar'>
  <div className='link1'><Link to="/home">Home</Link></div>
  <div className='link1'><Link to="/about as">Add Customer</Link></div>
 <div className='link1'>  <Link to="/courses">Practice Areas</Link></div>
 <div className='link1'>   <Link to="/elements">Testimonials</Link></div>
 <div className='link1'> <Link to="/news">About</Link></div>
  <div className='link1'> <Link to="/contact">Contact</Link></div>
         </div>
         <div className="sarihisse">
<div className='phone'><img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" srcset="" /></div>
          <h3>+43 4566 7788 2457</h3>
          </div>
    </div>
  )
}

export default Header
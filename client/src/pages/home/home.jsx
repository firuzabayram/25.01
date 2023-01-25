import React from 'react'
import Courses from '../courses/courses'
import '../home/home.scss'
const Home = () => {
  return (
    <>
    <div className='yuxarihisse'>

      <div className='shekil'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"/></div>
   
      <div className="three">
        <div className="online">
          <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
          <div className='cours'><h3>Online Courses</h3>
        <h5>VIEV MORE</h5></div>
        </div>
        <div className="online">
          <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
          <div className='cours'><h3>Online Courses</h3>
        <h5>VIEV MORE</h5></div>
        </div>
        <div className="online">
          <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
          <div className='cours'><h3>Online Courses</h3>
        <h5>VIEV MORE</h5></div>
        </div>
      </div>
    </div>
<Courses/>
   
    </>
 
  )
}

export default Home
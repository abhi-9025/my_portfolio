import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'
const Navbar = () => {
  return (
    // __ is a BEM methodology simply a naming convention
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo'/>
        </div>
        <ul className='app__navbar-links'>
            {['home','about','work','skills','contact'].map((item)=>(
         <li key={`navitem-${item}`} className='app__flex p-text'>
            <div/>
            <a href={`#${item}`}>{item}</a>

         </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
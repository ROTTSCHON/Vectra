import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { navbarData } from './navbarData'
import "./Navbar.css"
import { IconContext } from 'react-icons/lib'
const NavBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
        <div className='navbar' onClick={showSidebar}>
            <Link to='#' className='menu-bars'>
            <FaIcons.FaBars/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </Link>
            </li>
            {navbarData.map((item, index)=>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to ={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar

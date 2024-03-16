import { NavLink } from "react-router-dom"
import './Nav.css'
import { IoHome } from "react-icons/io5";

function Nav() {
    return (
        <nav className="nav">
            <NavLink to={'/'}>LOGO</NavLink>

            <NavLink to={'/'} className="homeLink">
               <IoHome />
                Home
            </NavLink> 
            <NavLink to={'/transaction'}>Transaction</NavLink> 
            <NavLink to={'/solde'}>Solde</NavLink> 
        </nav>
    )
}

export default Nav

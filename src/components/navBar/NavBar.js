import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {

    const activeLink = ({ isActive }) => isActive ? 'nav_item nav_active' : "nav_item"

    return (
        <nav className='nav_bar'>
            <Link className='nav_logo' to='/'>
                <p><span>&#60;</span>MDR<span>&#62;</span></p>
            </Link>
            <ul className='nav_items'>
                <NavLink className={activeLink} to='/'>
                    <span className="material-icons">home</span>
                    <p className='nav_item_text'>Inicio</p>
                </NavLink>
                <NavLink className={activeLink} to='/about'>
                    <span className="material-icons">person</span>
                    <p className='nav_item_text'>Sobre Mi</p>
                </NavLink>
                <NavLink className={activeLink} to='/projects'>
                    <span className="material-icons">work</span>
                    <p className='nav_item_text'>Proyectos</p>
                </NavLink>
                <NavLink className={activeLink} to='/contact'>
                    <span className="material-icons">call</span>
                    <p className='nav_item_text'>Contacto</p>
                </NavLink>
            </ul>
        </nav>
    )
}
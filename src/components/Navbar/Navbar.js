import { NavLink } from "react-router-dom"
import classes from './Navbar.module.scss'
import { NavList } from '../../db/db'

const Navbar = () => {
    return (
        <nav className={classes.NavConf}>
            {
                NavList.map((item, index) => (
                    <NavLink key={index} to={item.path}
                        activeClassName="active"
                        className={
                            `${classes.navLink}
                    nav-item   
                    `} >
                        {item.title}
                    </NavLink>
                ))
            }
        </nav>
    )
}

export default Navbar

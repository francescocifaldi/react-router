import { Link, NavLink } from "react-router-dom"
import style from './Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className={style.navbar}>
                        <ul className={style.menu}>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/content">Content</NavLink></li>
                            <li><NavLink to="/about-us">About us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
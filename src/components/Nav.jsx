import { Link, NavLink } from "react-router-dom"
import style from './Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className={style.navbar}>
                        <ul className={style.menu}>
                            <NavLink className={style.btn} to="/">Home</NavLink>
                            <NavLink className={style.btn} to="/content">Content</NavLink>
                            <NavLink className={style.btn} to="/about-us">About us</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
import { Link, NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="menu">
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/content">Content</NavLink>
                            <NavLink to="/about-us">About us</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
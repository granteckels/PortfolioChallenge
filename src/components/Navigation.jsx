import { Link } from 'react-router-dom'

import '../assets/colors.css'
import '../assets/Navigation.css'

function Navigation({ location }) {
    return (
        <nav>
            <ul>
                <li><Link className={location === "aboutme" ? "navLinksCurrent" : "navLinks"} to="/aboutme">About me</Link></li>
                <li><Link className={location === "portfolio" ? "navLinksCurrent" : "navLinks"} to="/portfolio">Portfolio</Link></li>
                <li><Link className={location === "contact" ? "navLinksCurrent" : "navLinks"} to="/contact">Contact</Link></li>
                <li><Link className={location === "resume" ? "navLinksCurrent" : "navLinks"} to="/resume">Resume</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
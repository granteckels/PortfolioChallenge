import { Link } from 'react-router-dom'

import '../assets/Navigation.css'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link className="navLinks" to="/aboutme">About me</Link></li>
                <li><Link className="navLinks" to="/portfolio">Portfolio</Link></li>
                <li><Link className="navLinks" to="/contact">Contact</Link></li>
                <li><Link className="navLinks" to="/resume">Resume</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
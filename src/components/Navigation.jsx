import { Link } from 'react-router-dom'

import '../assets/Navigation.css'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link className="navLinks" to="/">About Me</Link></li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </nav>
    )
}

export default Navigation
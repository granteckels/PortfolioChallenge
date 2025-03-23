import { Link } from 'react-router-dom'

import '../assets/Footer.css'
import GitHubLogo from '../assets/github-icon.svg'
import LinkedInLogo from '../assets/linkedin-icon.svg'
import StackOverflowLogo from '../assets/stackoverflow-icon.svg'

function Footer() {
    return (
        <div id="footer">
            <Link to=""><img src={GitHubLogo} width="50" height="50" /></Link>
            <Link to=""><img src={LinkedInLogo} width="50" height="50" /></Link>
            <Link to=""><img src={StackOverflowLogo} width="50" height="50" /></Link>
        </div>
    )
}

export default Footer;
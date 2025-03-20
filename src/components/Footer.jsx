import '../assets/Footer.css'
import GitHubLogo from '../assets/github-icon.svg'
import LinkedInLogo from '../assets/linkedin-icon.svg'
import StackOverflowLogo from '../assets/stackoverflow-icon.svg'

function Footer() {
    return (
        <div id="footer">
            <a href=""><img src={GitHubLogo} width="50" height="50" /></a>
            <a href=""><img src={LinkedInLogo} width="50" height="50" /></a>
            <a href=""><img src={StackOverflowLogo} width="50" height="50" /></a>
        </div>
    )
}

export default Footer;
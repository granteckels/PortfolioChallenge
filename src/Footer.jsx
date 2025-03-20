import './assets/Footer.css'
import GitHubLogo from './assets/github-icon.svg'
import LinkedInLogo from './assets/linkedin-icon.svg'
import StackOverflowLogo from './assets/stackoverflow-icon.svg'

function Footer() {
    return (
        <div id="footer">
            <img src={GitHubLogo} width="50" height="50" />
            <img src={LinkedInLogo} width="50" height="50" />
            <img src={StackOverflowLogo} width="50" height="50" />
        </div>
    )
}

export default Footer;
import { Link } from 'react-router-dom'

import '/src/assets/Project.css'

function Project({ src, name, deployLink, repoLink }) {
    return (
        <>
            <li class="project">
                <div class="img-container">
                    <img src={src} />
                    <div class="overlay-text">
                        <p><Link to={deployLink}>{name}</Link></p>
                        <p><Link to={repoLink}><i class="fa fa-github"></i></Link></p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Project
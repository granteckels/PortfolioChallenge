import '/src/assets/Project.css'

function Project({ src, name, deployLink, repoLink }) {
    return (
        <>
            <li class="project">
                <div class="img-container">
                    <img src={src} />
                    <div class="overlay-text">
                        <p><a href={deployLink}>{name}</a></p>
                        <p><a href={repoLink}><i class="fa fa-github"></i></a></p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Project
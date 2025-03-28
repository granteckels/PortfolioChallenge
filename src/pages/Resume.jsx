import { Link } from 'react-router-dom'

function Resume() {
    return (
        <>
            <h2>Resume</h2>
            <p>Download my <Link to="">resume</Link></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>PostgreSQL</li>
            </ul>
        </>
    )
}

export default Resume
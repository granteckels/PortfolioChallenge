import '/src/assets/Portfolio.css';
import Project from "/src/components/Project.jsx"

import Calculator from '../assets/calculator.webp';
import LEDWall from '../assets/led-wall.jpg';
import PastelPuzzles from '../assets/pastel-puzzles.webp';
import RunBuddy from '../assets/run-buddy.png';
import SurfReport from '../assets/surf-report.jpg';
import Microblog from '../assets/microblog.webp';

function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <ul id="projects">
                <Project src={Calculator} name="Calculator" deployLink="" repoLink="" />
                <Project src={LEDWall} name="LED Wall" deployLink="" repoLink="" />
                <Project src={PastelPuzzles} name="Pastel Puzzles" deployLink="" repoLink="" />
                <Project src={RunBuddy} name="Run Buddy" deployLink="" repoLink="" />
                <Project src={SurfReport} name="Surf Report" deployLink="" repoLink="" />
                <Project src={Microblog} name="Microblog" deployLink="" repoLink="" />
            </ul>
        </>
    )
}

export default Portfolio
import '/src/assets/Portfolio.css';
import Project from "/src/components/Project.jsx"

function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <ul id="projects">
                <Project src='/src/assets/calculator.webp' name="Calculator" deployLink="" repoLink="" />
                <Project src='/src/assets/led-wall.jpg' name="LED Wall" deployLink="" repoLink="" />
                <Project src='/src/assets/pastel-puzzles.webp' name="Pastel Puzzles" deployLink="" repoLink="" />
                <Project src='/src/assets/run-buddy.png' name="Run Buddy" deployLink="" repoLink="" />
                <Project src='/src/assets/surf-report.jpg' name="Surf Report" deployLink="" repoLink="" />
                <Project src='/src/assets/microblog.webp' name="Microblog" deployLink="" repoLink="" />
            </ul>
        </>
    )
}

export default Portfolio
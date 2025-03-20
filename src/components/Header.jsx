import '../assets/Header.css'

function Header({ children }) {
    return (
        <div id="header">
            <h2>Lernantino</h2>
            {children}
        </div>
    )
}

export default Header
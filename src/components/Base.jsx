import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'
import '../assets/colors.css'
import '../assets/Base.css'

function Base() {
    return (
        <>
        <Header>
            <Navigation></Navigation>
        </Header>
        <Content />
        <Footer />
        </>
    )
}

export default Base;
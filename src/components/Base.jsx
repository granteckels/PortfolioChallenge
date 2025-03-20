import { Outlet, useLocation } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import '../assets/colors.css'
import '../assets/Base.css'

function Base() {
    const location = useLocation().pathname.slice(1);

    return (
        <>
            <Header>
                <Navigation location={location} />
            </Header>
            <div id="content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Base;
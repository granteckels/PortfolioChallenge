import { Outlet } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import '../assets/colors.css'
import '../assets/Base.css'

function Base() {
    return (
        <>
        <Header>
            <Navigation></Navigation>
        </Header>
        <Outlet />
        <Footer />
        </>
    )
}

export default Base;
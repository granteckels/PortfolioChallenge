import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import './assets/colors.css'
import './assets/App.css'

function App() {
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

export default App

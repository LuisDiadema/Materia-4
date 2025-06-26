import { useContext } from 'react'

import Banner from '../Componentes/Banner/Banner'
import Header from '../Componentes/Header/Header'
import AboutText from '../Componentes/AboutText/AboutText'
import Footer from '../Componentes/Footer/Footer'

// Contexts
import { AppContext } from '../Contexts/AppContext'

function About () {
    const appContext = useContext(AppContext)
    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg" />
        <div className="container">
            <AboutText />
        </div>
        <Footer />
        </>
    )
}

export default About
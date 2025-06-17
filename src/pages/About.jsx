import Banner from '../Componentes/Banner/Banner'
import Header from '../Componentes/Header/Header'
import AboutText from '../Componentes/AboutText/AboutText'
import Footer from '../Componentes/Footer/Footer'

function About () {
    return (
        <>
        <Header />
        <Banner title="About" image="about.jpg" />
        <div className="container">
            <AboutText />
        </div>
        <Footer />
        </>
    )
}

export default About
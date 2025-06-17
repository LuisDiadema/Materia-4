import Header from "../Componentes/Header/Header"
import Button from "../Componentes/Button/Button"
import Hero from "../Componentes/Hero/Hero"
import Footer from "../Componentes/Footer/Footer"
import ProjectsList from '../Componentes/PorjectsList/ProjectsList'

function Home () {
    return (
        <>
        <Header />
        <div className="container">
            <Hero />
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}

export default Home
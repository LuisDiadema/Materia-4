import Header from "../Componentes/Header/Header"
import Hero from "../Componentes/Hero/Hero"
import Footer from "../Componentes/Footer/Footer"
import ProjectsList from '../Componentes/ProjectsList/ProjectsList'

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
import Header from "../Componentes/Header/Header"
import Banner from "../Componentes/Banner/Banner"
import Footer from "../Componentes/Footer/Footer"
import ProjectsList from '../Componentes/ProjectsList/ProjectsList'

function Projects () {
    return (
        <>
        <Header />
        <Banner title="Projects" image="projects.jpg"/>
        <div className="container">
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}

export default Projects
import { useContext } from 'react'

import Header from "../Componentes/Header/Header"
import Banner from "../Componentes/Banner/Banner"
import Footer from "../Componentes/Footer/Footer"
import ProjectsList from '../Componentes/ProjectsList/ProjectsList'

// Context
import { AppContext } from '../contexts/AppContext'

function Projects () {
    const appContext = useContext(AppContext)

    return (
        <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg"/>
        <div className="container">
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}

export default Projects
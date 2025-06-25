import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'

// Assets
import likeFilled from '../../assets/like-filled.svg'
import like from '../../assets/like.svg'

// Utils
import { getApiData } from '../../services/apiServices'

// Contexts
import { AppContext } from '../../contexts/AppContext'

function ProjectsList () {
    const [projects, setProjects] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    const appContext = useContext(AppContext)

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">
                {
                    projects ? 
                        projects.map((project) => (
                            <div className="project-card jc-center al-center fd-center" key={project.id}>
                                <div 
                                    className="thumb tertiary-background"
                                    style={{ backgroundImage: `url(${project.thumb})`}}
                                ></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <img src= { likeFilled } height="20px" />
                            </div>
                        )) 
                    : 
                    null
                }
            </div>
        </div>
    )
}

export default ProjectsList
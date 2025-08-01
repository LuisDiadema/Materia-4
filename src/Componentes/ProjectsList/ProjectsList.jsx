import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'

// Assets
import likeFilled from '../../assets/like-filled.svg'
import likeOutline from '../../assets/like.svg'

// Components
import Button from '../Button/Button'

// Utils
import { getApiData } from '../../services/apiServices'

// Contexts
import { AppContext } from '../../Contexts/AppContext'

function ProjectsList () {
    const [projects, setProjects] = useState()
    const [favProjects, setFavProjects] = useState([])
    const appContext = useContext(AppContext)

    const handleSavedProjects = (id) => {
        setFavProjects((pervFavProjects) => {
            if (pervFavProjects.includes(id)) {
                const filterArray = pervFavProjects.filter((projectId) => projectId !== id )
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return pervFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...pervFavProjects, id]))
                return [...pervFavProjects, id]
            }
        })
    }

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

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProjects(savedFavProjects)
        }
    }, [])

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
                                <Button buttonStyle="unstyled" onClick={() => handleSavedProjects(project.id)}>
                                    <img src= {favProjects.includes(project.id) ? likeFilled : likeOutline} height="20px" />
                                </Button>
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
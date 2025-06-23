import { useState, useEffect } from 'react'
import './ProjectsList.css'

// Assets
import likeFilled from '../../assets/like-filled.svg'
import like from '../../assets/like.svg'

// Utils
import { getApiData } from '../../services/apiServices'

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

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>Follow Our Projects</p>
            </div>
            <div className="projects-grid">
                {
                    projects.map((project) => (
                        <div key={project.id}></div>
                    ))
                }
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb  tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
                <div className="project-card jc-center al-center fd-center">
                    <div className="thumb tertiary-background"></div>
                    <h3>Luisinho Diadema</h3>
                    <p>SP, Diadema</p>
                    <img src= { likeFilled } height="20px" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
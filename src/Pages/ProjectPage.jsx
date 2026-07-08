import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'

const ProjectPage = () => {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch('https://eva-api-0oo2.onrender.com/projects')
                const data = await res.json()
                const foundProject = data.find((project) => project.id === id)
                setProject(foundProject)
            } catch (error) {
                console.error('Error fetching project:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProject()
    }, [id])

    return <ProjectDetails project={project} />
}

export default ProjectPage

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
                const res = await fetch('http://localhost:8000/projects')
                const data = await res.json()
                const foundProject = data.find((project) => project.id === id)

                console.log('id from URL:', id)
                console.log('project ids:', data.map((project) => project.id))
                console.log('found project:', foundProject)
                
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

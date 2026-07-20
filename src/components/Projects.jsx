import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('https://eva-api-0oo2.onrender.com/projects');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading){
        return <FadeLoader />
    }

    return (
        <div className="bg-[var(--background)] py-15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id || project.title} className="flex items-center md:text-right border border-gray-300 bg-[var(--cream)] rounded-lg p-6">
                        <img
                            className="w-3/5 rounded-[25px] object-cover p-2"
                            src={project.images[0]}
                            alt={project.title}
                        />
                        <div className="w-2/5 text-right">
                            <h2 className='text-xl font-semibold pb-4'>{project.title}</h2>
                            <p> {project.description} </p>
                            <div className="flex flex-wrap justify-end gap-2 py-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-[var(--olive)] !text-[var(--cream)] px-3 py-1 rounded-lg text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to={`/projects/${project.id}`}
                                className="uppercase underline underline-offset-4"
                            >
                                View Project <FaArrowRight className="inline" />
                            </Link>
                        </div >
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

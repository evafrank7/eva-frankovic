import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const FeaturedProject = () => {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('https://eva-api-0oo2.onrender.com/projects');
                const data = await res.json();
                const featuredProject = data.find((project) => project.featured);
                setProject(featuredProject);
            } catch (error) {
                console.error('Error fetching featured project:', error);
            }
        };

        fetchProjects();
    }, []);

    if (!project) {
        return null;
    }

    const projectImage = project.images?.[0];

    return (
        <div className="bg-[var(--cream)] rounded-[25px] py-6 sm:py-8 lg:py-10 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 lg:gap-8">
                {projectImage && (
                    <section className="flex-1 w-full flex justify-center">
                        <img
                            className="w-full max-w-md rounded-[25px] object-cover"
                            src={projectImage}
                            alt={project.title}
                        />
                    </section>
                )}

                <section className="flex-1 w-full min-w-0 text-center md:text-left">
                    <p className="uppercase tracking-wide text-sm mb-2">Featured Project</p>
                    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                    <p className="mb-4">{project.description}</p>

                    {project.subDescription && (
                        <p className="mb-4 text-gray-700">{project.subDescription}</p>
                    )}

                    {project.tech && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 py-4">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-[var(--olive)] !text-[var(--cream)] px-3 py-1 rounded-lg text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <Link
                        to={project.link}
                        className="uppercase underline underline-offset-4"
                    >
                        View Project <FaArrowRight className="inline" />
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default FeaturedProject;

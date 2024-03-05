import React from 'react'
import { Project } from '../Types/Project'
import { MOCK_PROJECTS } from '../MokProject/MokeProject';
import { MokeButton } from '../Components/MokeButton';
import Form from '../Components/Form'


interface ProjectsListProps {
    projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    console.log(MOCK_PROJECTS)


    return (
        <div style={{gap: '1rem', margin: '1rem'}} className="d-flex flex-wrap">
            {projects.map((project) => (
                <div key={project.id}>
                    <div style={{ width: "18rem" }} className="card ">
                        <img className="card-img-top" style={{ objectFit: 'cover', height: "250px" }} src={project.imageUrl} alt={project.name} />
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{project.name}</strong>
                            </h5>
                            <p>{project.description}</p>
                            <p>Budget : {project.budget.toLocaleString()}</p>
                        </section>
                        <MokeButton project={project} />
                        <Form />
                    </div>


                </div>

            ))}
        </div>
    );
}

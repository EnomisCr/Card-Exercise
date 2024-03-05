import React from 'react'
import { Project } from '../Types/Project';

export const MokeButton = ({ project }: { project: Project }) => {
    const handleEditClick = (projectBeingEdited: Project) => {
        console.log("Project Being Edited");
        console.log(projectBeingEdited);
    };

    return (
        <button onClick={() => handleEditClick(project)}>EDIT</button>
    )
}

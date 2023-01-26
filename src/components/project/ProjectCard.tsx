import style from './ProjectCard.module.css'

interface IProjectCard {
    id: string,
    name: string,
    bugdet: number,
    category: string,
    handleRemove: any,
}

function ProjectCard(props: IProjectCard) {

    return (
        <p>Projeto</p>
    )
}

export default ProjectCard
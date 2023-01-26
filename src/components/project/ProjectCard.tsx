import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface IProjectCard {
    id?: string,
    name?: any,
    budget: number,
    category: string,
    key: string,
    handleRemove?: any,
}

function ProjectCard(props: IProjectCard) {

    return (
        <div className={styles.project_card}>
            <h4>{props.name}</h4>
            <p>
                <span>Orçamento: </span> R${props.budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[props.category.toLowerCase()]}`}></span> {props.category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
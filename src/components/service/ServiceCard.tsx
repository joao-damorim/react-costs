import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css'

interface IServiceCard {
    id: string,
    name: string,
    cost: number,
    description: string,
    handleRemove: any,
}

function ServiceCard(props: IServiceCard) {
    const remove = (e: any) => {
        e.preventDefault()
        props.handleRemove(props.id, props.cost)
    }

    return (
        <div className={styles.project_card}>
            <h4>{props.name}</h4>
            <p>
                <span>Custo total:</span> R${props.cost}
            </p>
            <p>{props.description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
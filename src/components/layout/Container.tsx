import styles from './Container.module.css'
import { ReactNode } from 'react'


interface IContainer {
    customClass?: any,
    children?: ReactNode
}

function Container(props: IContainer) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>

    )
}

export default Container
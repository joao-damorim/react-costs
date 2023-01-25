import styles from './ButtonSubmit.module.css'

interface IButtonSubmit {
    text: string
}

function ButtonSubmit(props: IButtonSubmit) {
    return (
        <div>
            <button className={styles.btn}>{props.text}</button>
        </div>

    )
}

export default ButtonSubmit
import styles from './Message.module.css'

interface IMessage {
    msg: string,
    type: string
}

function Message(props: IMessage) {
    return (
        <div className={`${styles.message} ${styles[props.type]}`}>{props.msg}</div>
    )
}

export default Message
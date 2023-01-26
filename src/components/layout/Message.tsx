import styles from './Message.module.css'
import { useState, useEffect } from 'react'
interface IMessage {
    msg: string,
    type: string
}

function Message(props: IMessage) {
    
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        if(!props.msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [props.msg])

    return (
        <>
        {visible && (
            <div className={`${styles.message} ${styles[props.type]}`}>{props.msg}</div>
        )}
        </>
    )
}

export default Message
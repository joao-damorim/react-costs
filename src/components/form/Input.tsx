import styles from './Input.module.css'

interface IInput {
    type: any,
    text: string,
    name: string,
    placeholder: string,
    handleOnChange: any,
    value: any
}

function Input(props: IInput) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={props.name}> {props.text}:</label>
            <input 
                type={props.type} 
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
                value={props.value} />
        </div>

    )
}

export default Input
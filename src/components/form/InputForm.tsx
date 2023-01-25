import styles from './InputForm.module.css'

interface IInputForm {
    type: any,
    text: string,
    name: string,
    placeholder: string,
    handleOnChange?: any,
    value?: any
}

function InputForm(props: IInputForm) {
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

export default InputForm
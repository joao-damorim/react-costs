import { urlToHttpOptions } from 'url'
import styles from './Select.module.css'

interface ISelect {
    text: string,
    name: string,
    options?: any,
    handleOnChange?: any,
    value?: any
}

function Select(props: ISelect) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={props.name}> {props.text}:</label>
            <select
                name={props.name}
                id={props.name}
                onChange={props.handleOnChange}
                value={props.value}>
                <option>Selecione uma opção</option>
                {props.options.map((option: any) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>

    )
}

export default Select
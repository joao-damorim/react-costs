import {useState} from 'react'

import ButtonSubmit from '../form/ButtonSubmit';
import InputForm from '../form/InputForm';
import Select from '../form/Select';
import styles from './ProjectForm.module.css';

interface IProjectForm {
    btnText: string;
}

function ProjectForm(props: IProjectForm) {

    const [categories, setCategories] = useState([])

    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))

    return (
        <form className={styles.form}>
            <InputForm 
                type="text" 
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"/>
            <InputForm
                type="number" 
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"/>
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <ButtonSubmit text={props.btnText}/>
        </form>
    )
}

export default ProjectForm
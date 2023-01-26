import {useEffect, useState} from 'react'

import ButtonSubmit from '../form/ButtonSubmit';
import InputForm from '../form/InputForm';
import Select from '../form/Select';
import styles from './ProjectForm.module.css';

interface IProjectForm {
    btnText: string,
    handleSubmit: any,
    projectData?: any
}

function ProjectForm(props: IProjectForm) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(props.projectData || {})
    
    useEffect(() => {
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
        }, [])

    const submit = (e: any) => {
        e.preventDefault()
        props.handleSubmit(project)
    }

    function handleChange(e: any) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e: any) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <InputForm 
                type="text" 
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}/>
            <InputForm
                type="number" 
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}/>
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                handleOnChange={handleCategory}
                options={categories}
                value={project.category ? project.category.id : ''}/>
            <ButtonSubmit text={props.btnText}/>
        </form>
    )
}

export default ProjectForm
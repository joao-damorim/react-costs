
import ButtonSubmit from '../form/ButtonSubmit';
import InputForm from '../form/InputForm';
import Select from '../form/Select';
import styles from './ProjectForm.module.css';

function ProjectForm() {
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
            <Select name="category_id" text="Selecione a categoria"/>
            <ButtonSubmit text=""/>
        </form>
    )
}

export default ProjectForm
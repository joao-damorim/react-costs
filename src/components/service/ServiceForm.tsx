import { useState } from 'react'

import InputForm from '../form/InputForm'
import ButtonSubmit from '../form/ButtonSubmit'

import styles from '../project/ProjectForm.module.css'

interface IServiceForm {
    handleSubmit: any,
    btnText: string,
    projectData: any,
}

function ServiceForm(props: IServiceForm) {

    function submit() {

    }

    function handleChange(e: any) {
        
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <InputForm
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <InputForm
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total do serviço"
                handleOnChange={handleChange}
            />
            <InputForm
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <ButtonSubmit text={props.btnText} />
        </form>
    )
}

export default ServiceForm
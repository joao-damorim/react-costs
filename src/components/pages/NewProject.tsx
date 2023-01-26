import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjecForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project: any) {
        // initialize cost and services
        project.cost = 0
        project.services = 0

        fetch("http:/localhost:500/pprojects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
        })
        .catch(err => console.log(err))
    }

    return (
       <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços.</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
       </div>
    )
}

export default NewProject
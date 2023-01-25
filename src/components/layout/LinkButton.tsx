import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

interface ILinkButton {
    to: any;
    text: string;
}

function LinkButton(props: ILinkButton) {
    return (
        <Link className={styles.btn} to={props.to}>
            {props.text}
        </Link>
    )
}

export default LinkButton
import styles from './Delete.module.css'
import { Link } from 'react-router-dom'
export default function Delete({
    _id,
    category,
    onToolDelete
}) {
    return (
        <div className={styles["header"]}>
            <header>
                <h3>{`Are you sure you want to delete "${category}"`}?</h3>
            </header>

            <div className={styles["buttons"]}>

                <Link to={'/catalog'} className={styles["btn-delete"]} onClick={() => onToolDelete(_id)}>Delete</Link>
                <Link to={`/details/${_id}`} className={styles["btn-close"]} >Cancel</Link>

            </div>
        </div>

    )
}
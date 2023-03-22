import styles from './Register.module.css'
import { Link } from 'react-router-dom'


export default function Register({

}) {

    return (

        <div className={styles["create-form-container"]}>

            <form className={styles["form"]} >

                <h3 className={styles["h2"]}>Register</h3>

                <label className={styles["label"]}>Email:</label>
                <input type="text" name="email" className={styles["box"]} id="email" placeholder='Enter your email' />

                <label className={styles["label"]}>Password:</label>
                <input type="text" name="password" className={styles["box"]} id="password" placeholder='Enter your password' />

                <label className={styles["label"]}>Repeat password:</label>
                <input type="text" name="repeatPassword" className={styles["box"]} id="repeatPassword" placeholder='Repeat password' />


                <input type="submit" value="Register" className={styles["btn"]} />

                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>
    )
}
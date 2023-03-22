import styles from './Login.module.css'
import { Link } from 'react-router-dom'


export default function Login({

}) {

    return (

        <div className={styles["create-form-container"]}>

            <form className={styles["form"]} >

                <h3 className={styles["h2"]}>Login</h3>

                <label className={styles["label"]}>Email:</label>
                <input type="text" name="email" className={styles["box"]} id="email" placeholder='Enter your email' />

                <label className={styles["label"]}>Password:</label>
                <input type="text" name="password" className={styles["box"]} id="password" placeholder='Enter your password' />          


                <input type="submit" value="Login" className={styles["btn"]} />

                <p className={styles["reg"]}>Don't have an account? <Link  to="/register">Register</Link></p>
            </form>
        </div>
    )
}
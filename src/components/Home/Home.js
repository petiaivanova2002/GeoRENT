import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles['home-background']}>          
                
            <h1>Geodesy tools and accessories for RENT</h1>
            <p className={styles['italic']}>You measure the Earth!</p>
            <a href="/catalog" className={styles["rent"]}>view All tools</a>

            <ul className={styles['add']}>
                <li>Quickly!</li>
                <li>Accurently!</li>
                <li>Correctly!</li>
            </ul>
         
        </div>
    )

}
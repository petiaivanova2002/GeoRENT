import styles from './Tool.module.css'
import { Link } from 'react-router-dom'
export default function Tool({
    _id,
    brand,
    category,
    description,
    imageUrl,
    pricePerMounth,
    onDetailsTool,
}) {
    return (
        <div className={styles["tool"]}>
            <div className={styles["info-container"]}>
                <img src={imageUrl} alt ="tool"/>
                <div className="info">
                    <h3>Brand: {brand}</h3>
                    <h4>Category: {category}</h4>
                    {/* <h3>Description: {description}</h3>
                    <h3>Price per month: {pricePerMonth}</h3> */}


                </div>
            </div>
            
            <button type='button' className={styles["details-btn"]} >
                <Link to={`/details/${_id}`} className={styles["details"]} onClick={() => onDetailsTool(_id)}>Details</Link>
            </button>
                
      
            </div>
    )
}
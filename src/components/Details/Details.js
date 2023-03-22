import styles from './Details.module.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as toolsService from '../../services/toolsService'
export default function Details({
    _id,
    // brand,
    // category,
    // description,
    // imageUrl,
    // price,
}) {
    const {toolId} = useParams();
    const [tool, setTool] = useState({})

    useEffect(() => {
        toolsService.getOne(toolId)
        .then(result => {
            setTool(result)
        })
    },[toolId])
    return (
        <section className={styles["details-page"]}>
            <h1>Details</h1>

            <article className={styles["details-text"]}>
                {/* <button onClick={() => console.log(brand)}>Test</button> */}
                <h3> {tool.brand}</h3>
                <h4> {tool.category}</h4>
                <img src={tool.imageUrl} alt='tool'/>
                <p>Price per month: {tool.price}</p>
                <p>Description: {tool.description}</p>

                <div className={styles["buttons"]}>

                    <Link to={`/details/${toolId}/edit`} className={styles["btn-edit"]}>Edit</Link>
                    <Link to={`/details/${toolId}/delete`} className={styles["btn-delete"]}>Delete</Link>


                    <Link to={`/details/${toolId}/rent` } className={styles["btn-rent"]} >Rent</Link>
                    
                    <p className="wish-pub">You already added this tool to your rent list</p>
                    <Link to={'/catalog'} className={styles["btn-back"]}>Back</Link>

                </div>
            </article>
        </section>

    )
}
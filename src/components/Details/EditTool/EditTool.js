import styles from './EditTool.module.css'
import * as toolsService from '../../../services/toolsService'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

export default function EditTool({
    _id,
    brand,
    category,
    description,
    imageUrl,
    price,
    weeklyPrice,
    onToolEdit,
    formErrors,
    formValidate,
}) {
    const { toolId } = useParams();
    // const [tool, setTool] = useState()

    // useEffect(() => {
    //     toolsService.getOne(toolId)
    //     .then(result => {
    //         console.log(result)
    //         setTool(result)
    //     })

    // }, [toolId]);

    const {formValues, onChangeHandler} = useForm({
        brand,
        category,
        description,
        imageUrl,
        price,
        weeklyPrice,
    });
    const navigate = useNavigate();

    // const onChangeHandler = (e) => {
    //     setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    // };

    const onToolEditSubmit = (e) => {
        onToolEdit(e, _id);
        navigate('/catalog');
    };

    return (

        <div className={styles["create-form-container"]}>

            <form className={styles["form"]} onSubmit={(e) => onToolEditSubmit(e, _id)} >

                <h3 className={styles["h2"]}>Edit tool</h3>
                <label className={styles["label"]}>Brand:</label>
                <input type="text" name="brand" className={styles["box"]} id="brand" placeholder='Enter brand of tool' value={formValues.brand} onChange={onChangeHandler} onBlur={formValidate} />
                {formErrors.brand && <p className={styles["error"]}>{formErrors.brand}</p>}

                <label htmlFor="category" className={styles["label"]}>Category:</label>
                <select name="category" id="category" value={formValues.category} onChange={onChangeHandler} onBlur={formValidate}>
                    <option name="lasers" value="Laser scanning systems">Laser scanning systems</option>
                    <option name="gps" value="GPS receivers"> GPS receivers</option>
                    <option name="drones" value="Drones">Drones</option>
                    <option name="totals" value="Total stations">Total stations</option>
                    <option name="levels" value="Digital levels">Digital levels</option>
                    <option name="accessories" value="Accessories">Accessories</option>
                </select>
                {/* <input type="text" name="category" className={styles["box"]}  id="category" placeholder='Category'/> */}
                {formErrors.category && <p className={styles["error"]}>{formErrors.category}</p>}

                <label className={styles["label"]}>Description:</label>
                <textarea type="text" name="description" className={styles["box"]} id="description" placeholder='Type a description' value={formValues.description} onChange={onChangeHandler} onBlur={formValidate}></textarea>
                {formErrors.description && <p className={styles["error"]}>{formErrors.description}</p>}

                <label className={styles["label"]}>Image:</label>
                <input type="text" name="imageUrl" className={styles["box"]} id="imageUrl" placeholder='https://' value={formValues.imageUrl} onChange={onChangeHandler} onBlur={formValidate} />
                {formErrors.imageUrl && <p className={styles["error"]}>{formErrors.imageUrl}</p>}


                {formValues.category === "Drones"
                    ?
                    <>
                        <label className={styles["label"]}>Price per week:</label>
                        <input type="text" name="weeklyPrice" className={styles["box"]} id="weeklyPrice" placeholder='Type price per week rent' value={formValues.weeklyPrice} onChange={onChangeHandler} onBlur={formValidate} />
                        {formErrors.weeklyPrice && <p className={styles["error"]}>{formErrors.weeklyPrice}</p>}
                    </>
                    :
                    <>
                        <label className={styles["label"]}>Price per month:</label>
                        <input type="number" name="price" className={styles["box"]} id="price" placeholder='Type price per month rent' value={formValues.price} onChange={onChangeHandler} onBlur={formValidate} />
                        {formErrors.price && <p className={styles["error"]}>{formErrors.price}</p>}
                    </>
                }

                <input type="submit" value="Add" className={styles["btn"]} />
            </form>
        </div>
    )
}
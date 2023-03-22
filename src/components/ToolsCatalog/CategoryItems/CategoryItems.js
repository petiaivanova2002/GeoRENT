import Tool from '../Tool/Tool';
import styles from './CategoryItems.module.css'
import { useParams } from 'react-router-dom';

export default function ToolsCatalog({
    tools,
    onDetailsTool,
}) {
    const { categoryItems } = useParams();
    // const [selectedCategory, setSelectedCategory] = useState(tools);
    const selectedCategory = tools.filter(x => x.category.toLowerCase() === categoryItems.toLowerCase())
    console.log(categoryItems);
    console.log(selectedCategory);

    const categoryProducts = {
        lasers:'Laser scanning systems',
        gps: 'GPS receivers',
        drones: 'Drones',
        totals: 'Total stations',
        levels: 'Digital levels',
        accessories: 'Accessories',
    }
    console.log(categoryProducts[categoryItems])

    return (
        <>
            <section className={styles["catalog"]} id="catalog">
                <h3>{categoryProducts[categoryItems]}</h3>
                <div className={styles["container"]}>
                    {selectedCategory.map(tool => <Tool
                        {...tool}
                        key={tool._id}                       
                    />)}
                    {tools.length === 0 && (
                        <h2 className={styles["no-tool"]}>There are no tool for rent yet...</h2>
                    )};

                </div>
            </section>
        </>
    )
}
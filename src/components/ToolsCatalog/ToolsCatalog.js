import Tool from './Tool/Tool';
import styles from './ToolsCatalog.module.css'

export default function ToolsCatalog({
    tools,
    onDetailsTool,
}) {

    // const onClose = () => {
    //     setSelectedTool(null);
    // }
    return (
        <>
            {/* {selectedTool && <Details {...selectedTool}  />} */}
            <section className={styles["catalog"]} id="catalog">
                <h2>Tools for your daily work!</h2>
                <div className={styles["container"]}>
                    {tools.map(tool => <Tool
                        {...tool}
                        key={tool._id}                      
                        onDetailsTool={onDetailsTool}
                    />)}
                    {tools.length === 0 && (

                    <h2 className={styles["no-tool"]}>There are no tool for rent yet...</h2>
                    )}


                </div>
            </section>
        </>
    )
}
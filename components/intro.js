import styles from "../styles/intro.module.css";

export default function Page(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.button}>
                    <a onClick={props.onClick} className={styles.text}>Click Me!</a>
                </div>
            </div>
        </>
    )
}
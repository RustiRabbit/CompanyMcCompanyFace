import Link from "next/link"

import styles from "../styles/intro.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.button}>
                    <Link href="/boom"><a className={styles.text}>Click Me!</a></Link> 
                </div>
            </div>
        </>
    )
}
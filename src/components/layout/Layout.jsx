import styles from "./layout.module.css"
import { Nav } from "../nav/Nav"

export function Layout({ children }) {
    return (
        <div className={styles.layout}>

            <div className={styles.sidebar}>
                <Nav />
            </div>
            <div className={styles.children}>
                {children}
            </div>


        </div>
    )
}
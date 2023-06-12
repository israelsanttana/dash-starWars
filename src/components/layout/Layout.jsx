import styles from "./layout.module.css"
import { Nav } from "../nav/Nav"

export function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Nav />

            {children}

        </div>
    )
}
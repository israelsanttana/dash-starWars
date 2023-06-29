import styles from "./layout.module.css"
import { Nav } from "../nav/Nav"
import { Header } from "../header/Header"

export function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.layoutContent} >
                <div className={styles.nav}>
                    <Nav />
                </div>

                <div className={styles.children}>
                    {children}
                </div>
            </div>


        </div>
    )
}
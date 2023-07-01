import styles from "./layout.module.css"
import { Nav } from "../nav/Nav"
import { Header } from "../header/Header"
import { useEffect, useState } from "react"

export function Layout({ children }) {

    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen)

    }


    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Header
                    toggleMenu={toggleMenu}
                />
            </div>

            <div className={styles.layoutContent} >
                <div className={styles.nav}>
                    {isNavOpen && <Nav

                    />}
                </div>

                <div className={styles.children}>
                    {children}
                </div>
            </div>


        </div>
    )
}
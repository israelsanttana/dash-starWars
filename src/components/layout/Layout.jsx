import styles from "./layout.module.css"
import { Nav } from "../nav/Nav"
import { Header } from "../header/Header"
import { useEffect, useState } from "react"

export function Layout({ children }) {

    const [isNavOpen, setIsNavOpen] = useState(true);


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1140) {
                setIsNavOpen(false);
            } else {
                setIsNavOpen(true);
            }
        }


        // Adicione um event listener para lidar com o redimensionamento da janela
        window.addEventListener("resize", handleResize);

        // Chame a função handleResize inicialmente
        handleResize();

        // Limpe o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const toggleMenu = () => {
        setIsNavOpen(!isNavOpen)


    }



    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Header
                    toggleMenu={toggleMenu}
                    isNavOpen={isNavOpen}

                />
            </div>

            <div className={styles.layoutContent} >
                <div className={styles.nav}>
                    {isNavOpen && <Nav
                        setIsNavOpen={setIsNavOpen}

                    />}
                </div>

                <div className={styles.children}>
                    {children}
                </div>
            </div>


        </div>
    )
}
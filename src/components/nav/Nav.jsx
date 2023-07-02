import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import logo from "../../assets/logo.png"



export function Nav({ setIsNavOpen }) {

    const handleMenu = () => {
        if (window.innerWidth <= 1140) {
            setIsNavOpen(false);
        } else {
            setIsNavOpen(true);
        }

    };

    return (



        <div className={styles.menu}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logo} width={120} />

                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink onClick={handleMenu} to="/">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenu} to="/peoole">Employees </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenu} to="/films">Projects</NavLink>
                        </li>

                        <li>
                            <NavLink onClick={handleMenu} to="/planets"> Offices</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleMenu} to="/starships">Fleet</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    )
}
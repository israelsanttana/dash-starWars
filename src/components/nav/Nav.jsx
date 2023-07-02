import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import logo from "../../assets/logo.png"



export function Nav({ toggleMenu }) {



    return (



        <div className={styles.menu}>
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logo} width={120} />

                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink onClick={toggleMenu} to="/">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenu} to="/peoole">Employees </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenu} to="/films">Projects</NavLink>
                        </li>

                        <li>
                            <NavLink onClick={toggleMenu} to="/planets"> Offices</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleMenu} to="/starships">Fleet</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>


    )
}
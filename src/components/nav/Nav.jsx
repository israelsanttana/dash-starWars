import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"
import logo from "../../assets/logo.png"


export function Nav() {
    return (

        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img src={logo} width={160} />

            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/peoole">Employees </NavLink>
                    </li>
                    <li>
                        <NavLink to="/films">Projects</NavLink>
                    </li>

                    <li>
                        <NavLink to="/planets"> Offices</NavLink>
                    </li>
                    <li>
                        <NavLink to="/starships">Fleet</NavLink>
                    </li>
                </ul>
            </nav>
        </div>


    )
}
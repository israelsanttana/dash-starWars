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
                        <NavLink to="/">Deshboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/peoole">Characters </NavLink>
                    </li>
                    <li>
                        <NavLink to="/films">Films</NavLink>
                    </li>

                    <li>
                        <NavLink to="/planets">Planets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/starships">Starships</NavLink>
                    </li>
                </ul>
            </nav>
        </div>


    )
}
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css"


export function Nav() {
    return (

        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Desh</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films">Films</NavLink>
                    </li>
                    <li>
                        <NavLink to="/peoole">Characters </NavLink>
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
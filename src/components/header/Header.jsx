import styles from './header.module.css'
import { List, X } from '@phosphor-icons/react'
import iconStarWars from '../../assets/iconStarWars.png'


export function Header({ toggleMenu, isNavOpen }) {

    return (

        <div className={styles.content}>

            <div className={styles.contentButton}>
                <div>
                    <img src={iconStarWars} width={70} />
                </div>

                {isNavOpen ? <button onClick={toggleMenu}  ><X size={32} /></button> : <button onClick={toggleMenu}  ><List size={32} /></button>}
            </div>


        </div>


    )
}


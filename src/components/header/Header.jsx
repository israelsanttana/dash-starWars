import styles from './header.module.css'
import { List, X } from '@phosphor-icons/react'
import logo from '../../assets/logo.png'


export function Header({ toggleMenu, isNavOpen }) {

    return (

        <div className={styles.content}>

            <div className={styles.contentButton}>
                <div>
                    <img src={logo} width={70} />
                </div>


                <button onClick={toggleMenu}>
                    {isNavOpen ? <X size={32} /> : <List size={32} />}
                </button>
            </div>


        </div>


    )
}


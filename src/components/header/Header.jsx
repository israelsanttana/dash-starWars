import styles from './header.module.css'
import { List } from '@phosphor-icons/react'

export function Header({ toggleMenu }) {


    return (

        <div className={styles.content}>
            <div className={styles.contentButton}>
                <button onClick={toggleMenu}  ><List size={32} /></button>
            </div>

        </div>


    )
}
import styles from './header.module.css'
import { List } from '@phosphor-icons/react'

export function Header() {
    return (

        <div className={styles.content}>
            <div className={styles.contentButton}>
                <button><List size={32} /></button>
            </div>

        </div>


    )
}
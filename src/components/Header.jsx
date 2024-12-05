import styles from "./Header.module.css"


import lgoIgnite from "../assets/lgo-ignite.png"

export function Header(){
    return(
        <header className={styles.header}>
        <img src={lgoIgnite} alt="" />
        </header>
    )
}
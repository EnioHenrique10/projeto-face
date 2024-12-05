import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
         <img className={styles.cover} src="https://cdn.sanity.io/images/tlr8oxjg/production/5c3120359be5c4f225cd7b817811217041b759ab-1192x668.png?w=3840&q=80&fit=clip&auto=format"  />
          

          <div className={styles.profile}>
             <img src="https://github.com/EnioHenrique10.png"  />

            <strong>Enio Henrique</strong>
            <span>Web Developer</span>
          </div>

          <footer>
            <a href="#">
                <PencilLine />
                Editar seu Perfil
            </a>
          </footer>
        </aside>
    )
}
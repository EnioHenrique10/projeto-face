import {ThumbsUp, Trash} from 'phosphor-react'
import styles from './Comment.module.css';



export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/EnioHenrique10.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                     <header>
                           <div className={styles.authorAndTime}>
                            <strong>Enio Henrique</strong>
                            <time title="01 de Abril as 19:55" dateTime="2024-01-04 19:55:25"> Cerca de 1h atrás</time>
                           </div>

                           <button title='Deletar Comentario'>
                              <Trash size={20}/>
                           </button>
                     </header>

                     <p>
                        Muito bom Dev, parabéns
                     </p>
                </div>
                 <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                 </footer>

            </div>
        </div>
    )
}
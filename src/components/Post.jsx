import { Comment } from "./Comment"
import styles from "./Post.module.css"


export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/EnioHenrique10.png" />
                    <div className={styles.authorInfo}>
                    <strong>Enio Henrique</strong>
                    <span>Web Developer</span>
                 </div>  
                </div>

                <time title="01 de Abril as 19:55" dateTime="2024-01-04 19:55:25"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz</p>
                <p><a href=""> EnioDev </a></p>
                <p><a href=""> #novoProjeto </a></p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                  placeholder="Deixe um comentario"
                />
                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
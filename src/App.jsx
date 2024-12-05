import { Post } from "./components/Post"
import { Header } from "./components/Header"
import "./Global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"


function App() {
  

  return (
    <div>
       <Header /> 

      <div className={styles.wrapper}>
        <Sidebar />

          <main>
             <Post author="Enio Henrique" content="fvsjflivhavhfkavhufkuvsfkvfksvfkkvfvjbfvwbfjvbhsu"/>

             <Post author="Davi Henrique" content="vfdhiushfiughfiuhfiusgfhiugshfighiudhfiughrtiuwerhiguwherigwir"/>
          </main>
        
      </div>
    </div>
  )
}

export default App

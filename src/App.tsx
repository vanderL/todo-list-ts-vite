import "./global.css"
import styles from './App.module.css'
import { Header } from "./components/Header/Header"
import { Task } from "./components/Task/Task"

function App() {

  return (
    <div className={styles.layout} >
      <Header />
      <main className={styles.wrapper}>
        <Task />
      </main>

    </div >
  )
}

export default App

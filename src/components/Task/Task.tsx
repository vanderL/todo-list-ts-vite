import styles from './Task.module.css';

import IconPlus from '../../assets/plus.svg';
import { TaskList } from '../TaskList/TaskList';

export function Task() {
  return (
    <div>
      <form
        className={styles.form}
      >
        <input
          className={styles.input}
          type="text"
          placeholder='Adicione uma nova tarefa'
        />
        <button
          className={styles.btn}
        >
          Criar
          <img src={IconPlus} alt="" />
        </button>
      </form>

      <TaskList />
    </div>
  )
}
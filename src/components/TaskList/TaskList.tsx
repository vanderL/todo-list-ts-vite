import styles from './TaskList.module.css';
import IconEmpty from '../../assets/empty.svg';
import { TaskRow } from '../TaskRow/TaskRow';

export function TaskList() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <span className={styles.spanLeft}>Tarefas criadas</span>
          <span className={styles.count}>0</span>
        </div>

        <div>
          <span className={styles.spanRigth}>Concluídas</span>
          <span className={styles.count}>0</span>
        </div>
      </header>
      {false ? (
        <div className={styles.wrapperListEmpty}>
          <img src={IconEmpty} />
          <h1 className={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</h1>
          <p className={styles.descriptionEmpty}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.wrapperList}>
          <TaskRow />
          <TaskRow />
        </div>

      )}
    </>
  )
}
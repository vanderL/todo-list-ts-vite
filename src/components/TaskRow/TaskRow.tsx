import styles from './TaskRow.module.css'

import IconTrash from '../../assets/trash.svg'
import IconCheckEmpty from '../../assets/checkEmpty.svg'
import IconCheckFull from '../../assets/checkFull.svg'

interface ITask {
  content: string;
  check: boolean;
}

interface Task {
  content: string;
  hasCheck: boolean;
  onCheckTask: (Task: ITask) => void;
  onDelete: (idToDelete: string) => void;
}


export function TaskRow({ content, hasCheck, onCheckTask, onDelete }: Task) {

  const handleDeleteTask = () => {
    onDelete(content)
  }
  return (
    <div className={styles.wrapperRow}

    >
      <div
        onClick={() => onCheckTask({
          content,
          check: hasCheck
        })}
      >
        <img src={hasCheck ? IconCheckFull : IconCheckEmpty} alt="" />
      </div>
      <span
        className={hasCheck ? styles.hasCheck : undefined}
        onClick={() => onCheckTask({
          content,
          check: hasCheck
        })}
      >
        {content}
      </span>
      <div>
        <img
          className={styles.delete}
          src={IconTrash}
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  )
}
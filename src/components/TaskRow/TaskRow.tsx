import styles from './TaskRow.module.css'

import IconTrash from '../../assets/trash.svg'
import IconCheckEmpty from '../../assets/checkEmpty.svg'
import IconCheckFull from '../../assets/checkFull.svg'

interface Task {
  content: string;
  hasCheck: boolean;
}

export function TaskRow({ content, hasCheck }: Task) {

  return (
    <div className={styles.wrapperRow}>
      <div className="checkBox">
        <img src={hasCheck ? IconCheckFull : IconCheckEmpty} alt="" />
      </div>
      <span className={hasCheck ? styles.hasCheck : undefined}>
        {content}
      </span>
      <div>
        <img src={IconTrash} alt="" />
      </div>
    </div>
  )
}
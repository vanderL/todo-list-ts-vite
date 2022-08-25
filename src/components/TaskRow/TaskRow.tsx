import styles from './TaskRow.module.css'

import IconTrash from '../../assets/trash.svg'
import IconCheckEmpty from '../../assets/checkEmpty.svg'
import IconCheckFull from '../../assets/checkFull.svg'

export function TaskRow() {
  const hasCheck = true;

  return (
    <div className={styles.wrapperRow}>
      <div className="checkBox">
        <img src={hasCheck ? IconCheckFull : IconCheckEmpty} alt="" />
      </div>
      <span className={hasCheck ? styles.hasCheck : undefined}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <div>
        <img src={IconTrash} alt="" />
      </div>
    </div>
  )
}
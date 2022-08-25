import styles from './Task.module.css';

import IconPlus from '../../assets/plus.svg';

export function Task() {
  return (
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
  )
}
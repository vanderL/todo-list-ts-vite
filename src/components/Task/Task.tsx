import styles from './Task.module.css';

import IconPlus from '../../assets/plus.svg';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import IconEmpty from '../../assets/empty.svg';
import { TaskRow } from '../TaskRow/TaskRow';

interface ITask {
  content: string;
  check: boolean;
}

export function Task() {
  const [newTask, setNewTask] = useState<string>();
  const [tasks, setTasks] = useState<ITask[]>([

  ])

  const totalTask = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const totalCompleted = useMemo(() => {
    return tasks.filter(task => task.check).length;
  }, [tasks])

  const handleCheckTask = (taskCheck: ITask) => {

    const newTasks = tasks.map(task => {
      if (taskCheck.content === task.content) {
        task.check = !task.check
        return task
      } else {
        return task
      }
    });
    setTasks(newTasks)

  }

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const taskDuplicate = tasks.find(task => {
      return newTask === task.content;
    })

    if (taskDuplicate) {
      const confirm = window.confirm('Atividade duplicada, continuar?');

      if (!confirm) {
        return;
      }
    }

    if (newTask) {
      const newTaskDefault = {
        content: newTask,
        check: false,
      }
      setTasks([...tasks, newTaskDefault])
    }


    setNewTask('')
  }

  const handleDeleteTask = (idTask: string) => {
    setTasks(prevState => prevState.filter(
      task => task.content !== idTask
    ));
  }


  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleCreateNewTask}
      >
        <input
          placeholder='Adicione uma nova tarefa'
          className={styles.input}
          type="text"
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button
          className={styles.btn}
          type={'submit'}
        >
          Criar
          <img src={IconPlus} alt="" />
        </button>
      </form>

      <header className={styles.header}>
        <div>
          <span className={styles.spanLeft}>Tarefas criadas</span>
          <span className={styles.count}>{totalTask}</span>
        </div>

        <div>
          <span className={styles.spanRigth}>Concluídas</span>
          <span className={styles.count}>{totalCompleted}</span>
        </div>
      </header>

      {tasks.length < 1 && (
        <div className={styles.wrapperListEmpty}>
          <img src={IconEmpty} />
          <h1 className={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</h1>
          <p className={styles.descriptionEmpty}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}

      <div className={styles.wrapperList}>

        {tasks?.map(task => (

          <TaskRow
            hasCheck={task.check}
            content={task.content}
            onCheckTask={handleCheckTask}
            onDelete={handleDeleteTask}
          />
        ))}


      </div>


    </div>
  )
}
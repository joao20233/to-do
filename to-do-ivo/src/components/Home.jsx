import { useState } from "react";
import { AddTask } from "./AddTask";
import { Card } from "./Card";
import { Header } from "./Header";

import styles from "./Home.module.css"

export function Home() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      task: 'Leitura',
      description: 'Ler 20 paginas do capitulo 3'
    },
    {
      id: '2',
      task: 'React',
      description: 'Assitir 3 aulas e fazer exercicios práticos'
    },
    {
      id: '3',
      task: 'Node',
      description: ''
    }
  ]);

  return (
    <div className={styles.home}>
      <Header />

      {tasks.map(task => (
        <Card
          key={task.id}
          tasks={tasks}
          task={task}
          onSetTasks={setTasks}
        />
      ))}

      <AddTask tasks={tasks} onSetTasks={setTasks} />
    </div>
  );
}
import { AddCircleOutline } from "@mui/icons-material"
import styles from "./AddTask.module.css"
import { useState } from "react";
import { ModalTask } from "./ModalTask";

export function AddTask({ tasks, onSetTasks }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.addTask} onClick={handleOpen}>
        <AddCircleOutline />
        <h5>Add Task</h5>
      </div>

      <ModalTask
        tasks={tasks}
        onSetTasks={onSetTasks}
        open={open}
        onHandleClose={handleClose}
      />
    </>
  )
}
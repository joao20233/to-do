import { Checkbox, IconButton } from "@mui/material";
import styles from "./Card.module.css"
import { CheckCircle, CircleOutlined, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { ModalTask } from "./ModalTask";

export function Card({ task, tasks, onSetTasks }) {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState()
  const [isEditing, setIsEditing] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setIsEditing(false)
  };

  function handleEditing() {
    setIsEditing(true)
  }

  function handleDelete(id) {
    const tasksWithDeletedOne = tasks.filter(task => task.id !== id)
    onSetTasks(tasksWithDeletedOne)
  }


  return (
    <>
      <div className={styles.card}>
        <Checkbox
          sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
          icon={<CircleOutlined />}
          checkedIcon={<CheckCircle />}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        <label onClick={handleOpen} className={isChecked ? styles.checked : ''}>
          {task.task}
        </label>

        <IconButton onClick={() => handleDelete(task.id)}>
          <DeleteOutline />
        </IconButton>
      </div>

      <ModalTask
        task={task}
        open={open}
        isEditing={isEditing}
        onSetIsEditing={setIsEditing}
        onSetTasks={onSetTasks}
        onHandleEditing={handleEditing}
        onHandleClose={handleClose}
      />
    </>
  );
}
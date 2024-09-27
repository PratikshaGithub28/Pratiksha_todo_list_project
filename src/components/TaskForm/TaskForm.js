import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ taskToEdit, handleSave }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    } else {
      setTaskName('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave({ id: taskToEdit ? taskToEdit.id : Date.now(), name: taskName });
    setTaskName(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="save-button">Save Task</button>
    </form>
  );
};

export default TaskForm;

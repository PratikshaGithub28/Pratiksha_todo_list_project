export const addTask = (task, tasks) => {
    return [...tasks, task];
  };
  
  export const updateTask = (updatedTask, tasks) => {
    return tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
  };
  
  export const deleteTask = (id, tasks) => {
    return tasks.filter(task => task.id !== id);
  };
  
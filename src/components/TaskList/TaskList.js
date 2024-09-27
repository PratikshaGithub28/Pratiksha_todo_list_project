// src/components/TaskList/TaskList.js
import React, { useState, useEffect } from 'react';
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        assignedTo: '',
        status: 'Not Started',
        dueDate: '',
        priority: 'Normal',
        comments: ''
    });

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.assignedTo && newTask.dueDate) {
            setTasks([...tasks, newTask]);
            setNewTask({
                assignedTo: '',
                status: 'Not Started',
                dueDate: '',
                priority: 'Normal',
                comments: ''
            });
        } else {
            alert("Please fill in all required fields!");
        }
    };

    return (
        <div className="task-list">
            <h2>Tasks</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <input 
                    type="text" 
                    name="assignedTo" 
                    placeholder="Assigned To" 
                    value={newTask.assignedTo} 
                    onChange={handleChange} 
                    required 
                />
                <select 
                    name="status" 
                    value={newTask.status} 
                    onChange={handleChange}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <input 
                    type="date" 
                    name="dueDate" 
                    value={newTask.dueDate} 
                    onChange={handleChange} 
                    required 
                />
                <select 
                    name="priority" 
                    value={newTask.priority} 
                    onChange={handleChange}
                >
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                </select>
                <input 
                    type="text" 
                    name="comments" 
                    placeholder="Comments" 
                    value={newTask.comments} 
                    onChange={handleChange} 
                />
                <button type="submit">Add Task</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.assignedTo}</td>
                            <td>{task.status}</td>
                            <td>{task.dueDate}</td>
                            <td>{task.priority}</td>
                            <td>{task.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;

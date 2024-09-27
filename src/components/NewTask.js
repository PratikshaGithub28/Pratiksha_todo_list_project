import React, { useState } from 'react';

const NewTask = ({ onSave }) => {
    const [assignedTo, setAssignedTo] = useState('');
    const [status, setStatus] = useState('Not Started');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Normal');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { assignedTo, status, dueDate, priority, description };
        onSave(newTask);
        // Reset form
        setAssignedTo('');
        setStatus('Not Started');
        setDueDate('');
        setPriority('Normal');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>New Task</h2>
            <label>Assigned To:</label>
            <input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                required
            />
            <label>Status:</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <label>Due Date:</label>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <label>Priority:</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select>
            <label>Description:</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default NewTask;

// src/App.js
import React from 'react';
import TaskList from './components/TaskList/TaskList';

const App = () => {
    return (
        <div className="App">
            <h1>To-Do List Application</h1>
            <TaskList />
        </div>
    );
};

export default App;

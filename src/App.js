import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const randomBackgrounds = [
    'linear-gradient(to right, #ff9a9e, #fad0c4)',
    'linear-gradient(to right, #a1c4fd, #c2e9fb)',
    'linear-gradient(to right, #fbc2eb, #a6c1ee)',
    'linear-gradient(to right, #fdcbf1, #e6dee9)',
    'linear-gradient(to right, #84fab0, #8fd3f4)',
    'linear-gradient(to right, #ffecd2, #fcb69f)',
  ];
  
  document.body.style.background = randomBackgrounds[Math.floor(Math.random() * randomBackgrounds.length)];
  

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

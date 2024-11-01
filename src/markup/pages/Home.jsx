import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInput =(e) => {
    setTask(e.target.value)
  }
     
  const handleAddOrEditTask = () => {
    if (!task) return;

    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? task : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask('');
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-10">
      <div className="w-full max-w-md h-auto bg-slate-500 p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center text-white">To-Do List</h1>
        <div className="flex justify-between items-center mb-4">
          <input
            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
            type="text"
            value={task}
            onChange={handleInput}
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddOrEditTask}
            className="text-white bg-amber-600 p-2 px-4 rounded-lg hover:bg-amber-500 transition duration-200"
          >
            {editIndex !== null ? 'Edit Task' : 'Add Task'}
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-slate-600 text-white rounded mb-2">
              <span>{t}</span>
              <div>
                <EditIcon
                  onClick={() => handleEditTask(index)}
                  className="text-blue-400 mr-2"
                />
                <DeleteIcon
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-400"
                />
                  
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
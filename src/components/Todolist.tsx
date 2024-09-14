import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FilterButtons from './FilterButtons';
import './Todolist.css'; 
import { Task } from './type';

const Todolist=() =>{
  const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [list, setList] = useState<Task[] |[]>(savedTasks);
  const [header, setHeader] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState<Task|null>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  const toggleStatus = (id:number) => {
    setList(list.map(item => 
      item.id === id ? { ...item, status: !item.status } : item
    ));
  };

  const deleteTask = (id:number) => {
    setList(list.filter(item => item.id !== id));
    if (editingTask && editingTask.id === id) {
      setEditingTask(null); // Clear editing state if the task is deleted
    }
  };

  const addTask = () => {
    setList([
      ...list,
      { id: Date.now(), header: header, description: description, status: false }
    ]);
    setHeader('');
    setDescription('');
  };

  const saveTask = (id:number) => {
    setList(list.map(item => 
      item.id === id 
        ? { ...item, header: header, description: description } 
        : item
    ));
    setHeader('');
    setDescription('');
    setEditingTask(null); // Clear editing state after saving
  };

  const getFilteredTasks = () => {
    if (filter === 'completed') return list.filter(item => item.status);
    if (filter === 'incomplete') return list.filter(item => !item.status);
    return list;
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskForm
        header={header}
        setHeader={setHeader}
        description={description}
        setDescription={setDescription}
        addTask={addTask}
        editingTask={editingTask}
        saveTask={saveTask}
      />
      <FilterButtons setFilter={setFilter} />
      <TaskList 
        tasks={getFilteredTasks()} 
        toggleStatus={toggleStatus} 
        deleteTask={deleteTask} 
        startEditing={setEditingTask} 
      />
    </div>
  );
}

export default Todolist;

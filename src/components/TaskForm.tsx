import { useEffect } from 'react';
import './TaskForm.css';
 interface TaskFormProps{
  header:string
  setHeader: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  addTask: () => void;
  editingTask: { id: number; header: string; description: string } | null;
  saveTask: (id: number) => void;
 }
function TaskForm({ header, setHeader, description, setDescription, addTask, editingTask, saveTask }:TaskFormProps) {
  useEffect(() => {
    if (editingTask) {
      setHeader(editingTask.header);
      setDescription(editingTask.description);
    } else {
      setHeader('');
      setDescription('');
    }
  }, [editingTask, setHeader, setDescription]);

  const handleSubmit = () => {
    if (editingTask) {
      saveTask(editingTask.id);
    } else {
      addTask();
    }
  };

  return (
    <div className="task-form">
      <input
        value={header}
        onChange={e => setHeader(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button onClick={handleSubmit}>
        {editingTask ? 'Save Task' : 'Add Task'}
      </button>
    </div>
  );
}

export default TaskForm;

import { useState, useEffect } from 'react';
import { fetchTasks } from '../lib/restAPI';

const useTasks = () => {
  const [tasks, setTasks] = useState<{ id: string; title: string; description: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return { tasks, loading, loadTasks };
};

export default useTasks;
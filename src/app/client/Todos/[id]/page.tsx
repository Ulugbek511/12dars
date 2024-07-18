'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ClientTodoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => setTodo(data));
    }
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

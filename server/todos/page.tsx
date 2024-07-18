export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    return { props: { todos } };
  }
  
  export default function ServerTodos({ todos }) {
    return (
      <div>
        <h1>Server-Side Todos</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
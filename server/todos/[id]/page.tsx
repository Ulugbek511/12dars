export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await res.json();
    return { props: { todo } };
  }
  
  export default function ServerTodoDetail({ todo }) {
    return (
      <div>
        <h1>{todo.title}</h1>
        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      </div>
    );
  }

  
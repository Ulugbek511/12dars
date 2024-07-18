export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return { props: { users } };
  }
  
  export default function ServerUsers({ users }) {
    return (
      <div>
        <h1>Server-Side Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
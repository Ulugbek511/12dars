export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return { props: { user } };
  }
  
  export default function ServerUserDetail({ user }) {
    return (
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
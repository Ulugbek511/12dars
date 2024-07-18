import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>assalomua aleykum </h1>
      <h2>Client side fetching</h2>
      <ul>
        <li><Link href="/client/posts">Client Posts</Link></li>
        <li><Link href="/client/todos">Client Todos</Link></li>
        <li><Link href="/client/users">Client Users</Link></li>
      </ul>
      <h2>server side data fetching</h2>
      <ul>
        <li><Link href="/server/posts">Server Posts</Link></li>
        <li><Link href="/app/server/todos">Server Todos</Link></li>
        <li><Link href="/app/server/users">Server Users</Link></li>
      </ul>
    </div>
  );
}

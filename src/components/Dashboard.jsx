import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { name, email, username, age } = location.state || {};

    if (!location.state || !name || !email || !username || !age) {
        return <div>Error receiving data</div>;
    }

  return (
    <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{username}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Dashboard
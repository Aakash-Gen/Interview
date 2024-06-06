import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function User() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard", { state: { name, email, username, age } });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input className='' type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
            <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
            <input type="text" placeholder='age' onChange={(e)=>setAge(e.target.value)} />
            <button >Submit</button>
            </form>
            
        </div>
  )
}
export default User
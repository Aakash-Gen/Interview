import  { useEffect, useState } from 'react'
import axios from 'axios'

function Data() {
    const [data, setData] = useState("");
    const [error,setError] = useState(null)
    useEffect(()=>{
        const fetchData = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users/3");
                setData(response.data);
            } catch (error) {
                setError("An error occurred while fetching the data.");
            }
        };
        fetchData();
    },[]);

    if(error){
        return(
            <div>
                Error : {error};
            </div>
        )
    }
  return (
    <div>
        <p>Name:{data.name}</p>
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
    </div>
  )
}

export default Data

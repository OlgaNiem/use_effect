import React, {useEffect, useState} from 'react'
import Link from 'next/link';

const index = () => {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0)
  async function fetchData(){
    const res = await fetch('http://10.111.3.78:3000/api/users');
    const data = await res.json();
    setUsers(data);
    
  }
  useEffect(() => {
    // only rendering once
    fetchData()
    console.log('render')
  }, [update])
  
  return (
    <div>
      <p><Link href="/timer">Timer</Link></p>
      <p><Link href="/clock">Clock</Link></p>
      {users.map(user =>(
        <div>
          <h2>{user.name}</h2>
        </div>
      ))}
      <button onClick={() => setUpdate(update +1)}>Render</button>
    </div>
  )
}

export default index
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spin } from 'antd'; // Import Ant Design Spin component
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [spinning, setSpinning] = useState(true); // Start with spinner active

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setSpinning(false); // Stop spinner after data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <Spin spinning={spinning} tip="Loading..." size="large" style={{ minHeight: '100vh' }}>
      <h2 className='title'>User's Data</h2>
      <div className='div1'>
        <table border={1} className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Spin>
  );
}

export default App;

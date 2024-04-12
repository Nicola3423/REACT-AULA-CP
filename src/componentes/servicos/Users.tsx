import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Erro ao buscar os usuários');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1 className='text-2xl font-bold mb-4'>Lista de Usuários</h1>
      <table>
        <thead>
          <tr>
            <td className='text-2xl font-bold mb-4'>Nome</td>
            <td className='text-2xl font-bold mb-4'>Email</td>
            <td className='text-2xl font-bold mb-4'>Endereço</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
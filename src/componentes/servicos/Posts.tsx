import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Função para buscar os posts da API
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Erro ao buscar os posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar os posts:', error);
      }
    };

    // Chama a função para buscar os posts quando o componente montar
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Posts</h1>
      <ul>
        {/* Mapeia os posts e exibe cada um deles */}
        {posts.map(post => (
          <li key={post.id}>
            <h2 className='text-white p-4'>TITULOS: {post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
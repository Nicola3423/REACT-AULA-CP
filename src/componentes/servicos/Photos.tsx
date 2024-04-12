import React, { useState, useEffect } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
          throw new Error('Erro ao buscar as fotos');
        }
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Erro ao buscar as fotos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Galeria de Fotos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
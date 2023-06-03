import React, { useEffect, useState } from 'react';
import { fetchHobbies } from './hobbyService';
import { Hobby } from './types';
import { addSampleBooks } from './hobbyService';

const App: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    fetchHobbies()
      .then(fetchedHobbies => {
        setHobbies(fetchedHobbies);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    addSampleBooks();
  }, []);

  return (
    <div>
      {/* Render the hobby list */}
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

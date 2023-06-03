import React, { useEffect, useState } from 'react';
import { fetchHobbies } from './hobbyService';
import { Hobby } from './types';
import { addSampleBooks } from './hobbyService';

const HobbyList: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    fetchHobbies()
      .then(fetchedHobbies =>{})
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {/* Render the hobby list */}
    </div>
  );
};

export default HobbyList;

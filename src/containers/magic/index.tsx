import React, { useState } from 'react';
import Display from './Display';
import Favorites from './Favorites';
import Search from './Search';

const Magic: React.FC = () => {
  const [person, setPerson] = useState('');

  const handleClickImage = (name: string) => {
    return setPerson(name);
  };

  return (
    <div className="magic flex-col p-8">
      <div className="max-w-5xl mx-auto">
        <Search handleClick={handleClickImage} />
        <Favorites handleClick={handleClickImage} />
        <Display person={person} />
      </div>
    </div>
  );
};

export default Magic;

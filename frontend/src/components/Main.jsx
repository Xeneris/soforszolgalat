/* import React from 'react';

const Main = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button href="/foglalas" className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold text-xl shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">
        Foglalás
      </button>
    </div>
  );
};

export default Main; */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/foglalas');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        onClick={handleClick}
        className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold text-xl shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out"
      >
        Foglalás
      </button>
    </div>
  );
};

export default Main;
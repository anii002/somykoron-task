import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#000000] text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Task Manager</h1>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

function Searchbar({placeholder, onSearchChange}) {
  return (
    <div>
     <input type='text' placeholder={placeholder} onChange={(e) => onSearchChange(e.target.value)}/>
    </div>
  );
}

export default Searchbar;

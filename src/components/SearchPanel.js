import React, { useState } from 'react';

function SearchPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSearchPanel = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className={`panel-search w-full p-t-10 p-b-15 ${searchVisible ? '' : 'dis-none'}`}>
      <div className="bor8 dis-flex p-l-15">
        <button 
          className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04" 
          onClick={toggleSearchPanel}
        >
          <i className="zmdi zmdi-search"></i>
        </button>

        <input 
          className="mtext-107 cl2 size-114 plh2 p-r-15" 
          type="text" 
          name="search-product" 
          placeholder="Search" 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default SearchPanel;

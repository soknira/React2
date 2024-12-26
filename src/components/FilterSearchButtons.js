import React, { useState } from 'react';

function FilterSearchButtons() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <div className="flex-w flex-c-m m-tb-10">
      <div
        className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter"
        onClick={() => setFilterVisible(!filterVisible)}
      >
        <i className={`icon-filter cl2 m-r-6 fs-15 trans-04 zmdi ${filterVisible ? 'dis-none' : 'zmdi-filter-list'}`}></i>
        <i className={`icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi ${filterVisible ? 'zmdi-close' : 'dis-none'}`}></i>
        Filter
      </div>

      <div
        className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
        onClick={() => setSearchVisible(!searchVisible)}
      >
        <i className={`icon-search cl2 m-r-6 fs-15 trans-04 zmdi ${searchVisible ? 'dis-none' : 'zmdi-search'}`}></i>
        <i className={`icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi ${searchVisible ? 'zmdi-close' : 'dis-none'}`}></i>
        Search
      </div>
    </div>
  );
}

export default FilterSearchButtons;

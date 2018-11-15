import React from 'react';
import FindPageHeader from './find_page_components/find_page_header';
import SearchContainer from './find_page_components/search_container';

const Findpage = () => {
  return (
    <div className="find-page-container">
      <FindPageHeader/>
      <SearchContainer/>
    </div>
  );
};


export default Findpage;

import React from 'react';
import CounsellorNavbar from '../layout/CounsellorNavbar';
import CounsellorSidebar from '../layout/CounsellorSidebar';

const CounsellorHome = () => {
  return (
    <>
      <CounsellorNavbar/>
      <div style={{ display: 'flex',padding:"0 20px 0 70px" }}>
        <CounsellorSidebar/>
      </div>
    </>
  );
}

export default CounsellorHome;

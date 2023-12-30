import React, { useState, useEffect } from 'react';
import './global.css';
import IndexPage from './pages/index';
import Information from './pages/information';

const MainPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  function navigateTo(targetPage: string) {
    console.log(`Navigating to /${targetPage}`);
    window.history.pushState({}, '', `/${targetPage}`);
    setCurrentPage(`/${targetPage}`);
  }

  const renderPage = () => {
    switch (currentPage) {
      case '/':
      case '/index':
        return <IndexPage />;
      case '/information':
        return <Information />;
      default:
        return <div>怎么寄了...</div>;
    }
  };

  return (
    <>
      <div>
        <button onClick={() => navigateTo('index')}>index</button>
        <button onClick={() => navigateTo('information')}>information</button>
      </div>
      {renderPage()}
    </>
  );
};

export default MainPage;
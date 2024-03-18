import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

const DynamicImportPage = ({ page }) => {
  const PageComponent = React.lazy(() => {
    return new Promise((resolve, reject) => {
      import(`./careers/${page}`)
        .then(module => resolve({ default: module.default }))
        .catch(error => {
          console.error(`Error importing page component: ${error}`);
          import('./NotFound').then(module => resolve({ default: module.default }));
        });
    });
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <PageComponent />
    </React.Suspense>
  );
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch data from text file
    fetch('careers.txt')
      .then(response => response.text())
      .then(text => {
        // Split text into lines
        const lines = text.split('\n').map(item => item.replace(/\r+$/, ''))
        setList(lines);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Routes */}
        {list.map((page, id) => (
          <Route key={id} path={`/${page}`} element={<DynamicImportPage page={page} />} />
        ))}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import Home from './components/pages/Home';
import History from './components/pages/History';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  )
}

export default App
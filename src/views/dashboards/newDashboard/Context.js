// App.js
import React from 'react';
import { TrendsProvider } from './trendsContext';
import Dashboard from '../Dashboard';

function App() {
  return (
    <TrendsProvider>
      <Dashboard />
    </TrendsProvider>
  );
}

export default App;

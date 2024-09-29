import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Send } from 'lucide-react';
import './App.css';
import PrimaryButton from './components/uiItem/Buttons/PrimaryButton';

function App() {
  return (
    <Router>
      <div className="p-4 space-y-4">
        <PrimaryButton 
          text="Click me" 
          onClick={() => console.log('Clicked')} 
        />
        
        
      </div>
    </Router>
  );
}

export default App;
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  const turnOnLed = async () => {
    try {
      await fetch('http://192.168.1.132:5000/api/start_led');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <button type="button" onClick={() => turnOnLed()}>
        ligue o led
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

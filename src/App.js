import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <LoginPage/> } />
      <Route path="/home" element={ <Home /> } />
    </Routes>
  )
}

export default App;

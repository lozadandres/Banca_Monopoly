import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import './App.css'

function App() {

  return (
    <Router>
        
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create-Game" element={<CreateGame />} />
        </Routes>
  
      
    </Router>
  )
}

export default App;

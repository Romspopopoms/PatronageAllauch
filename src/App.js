import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Activités from './pages/Activités';
import Quisommesnous from './pages/Quisommesnous';

const App = () => {
  return (
        <Router>
          <div className="flex flex-col w-full h-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="activités" element={<Activités />} />
              <Route path="Qui-sommes-nous" element={<Quisommesnous />} />

            </Routes>
          </div>
        </Router>

  );
}

export default App;

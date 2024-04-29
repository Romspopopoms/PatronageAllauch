import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Activités from './pages/Activités';
import Quisommesnous from './pages/Quisommesnous';
import Recrutement from './pages/Recrutement';

const App = () => {
  return (
        <Router>
          <div className="flex flex-col w-full h-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="activites" element={<Activités />} />
              <Route path="Quisommesnous" element={<Quisommesnous />} />
              <Route path="recrutement" element={<Recrutement />} />

            </Routes>
          </div>
          <Analytics />

        </Router>

  );
}

export default App;

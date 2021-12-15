import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './login.js';
import HowToPlay from './how-to-play.js';
import CharacterSelection from './character-select.js';
import CharacterPersonality from './character-personality.js';
import Scenario1 from './scenario1.js';
import Scenario2 from './scenario2.js';
import Scenario3 from './scenario3.js';
import Endings from './endings.js';

function App() {
    //change pages
    //let navigate = useNavigate();

  return (
      <div className="App">
          <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/HowToPlay" element={<HowToPlay />} />
              <Route path="/CharacterSelection" element={<CharacterSelection />} />
              <Route path="/CharacterPersonality" element={<CharacterPersonality />} />
              <Route path="/Scenario1" element={<Scenario1 />} />
              <Route path="/Scenario2" element={<Scenario2 />} />
              <Route path="/Scenario3" element={<Scenario3 />} />
              <Route path="/Endings" element={<Endings />} />
              <Route path="*" element={<Navigate exact ="/" replace to="/Login" />} />

          </Routes>
    </div>
  );
}

export default App;

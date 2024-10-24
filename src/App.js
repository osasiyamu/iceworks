import { Route, Routes } from 'react-router-dom';
import Navbar from './assets/pages/Navbar';
import HomePage from './assets/pages/Homepage';
import About from './assets/pages/About';
import Music from './assets/pages/music/Music';
import Projects from './assets/pages/projects/Projects';
import Photography from './assets/pages/photography/Photography';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route exact path='/' element={<HomePage/>} />
         <Route path='/about' element={<About/>} />
         {/* <Route path='/about' element={<About/>} /> */}
         <Route path='/music' element={<Music/>} />
         <Route path='/projects' element={<Projects/>} />
         <Route path='/photography' element={<Photography/>} />
       </Routes>
    </div>
  );
}

export default App;

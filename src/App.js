import { Route, Routes } from 'react-router-dom';
import Navbar from './assets/pages/Navbar';
import HomePage from './assets/pages/Homepage';
import About from './assets/pages/About';
import Music from './assets/pages/music/Music';
import Projects from './assets/pages/projects/Projects';
import Photography from './assets/pages/photography/Photography';
import SearchMeUp from './assets/pages/projects/SearchMeUp/SearchMeUp';
import ArtConnect from './assets/pages/projects/ArtConnect/ArtConnect';
import IceCuts from './assets/pages/projects/IceCuts/IceCuts';
import SurveyMonkey from './assets/pages/projects/SurveyMonkey/SurveyMonkey';

function App() {
  return (
    <div className="App">
      <Navbar />

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          {/* <Route path='/about' element={<About/>} /> */}
          <Route path='/music' element={<Music/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/photography' element={<Photography/>} />
          <Route path='/photography' element={<Photography/>} />


          <Route path='/artconnect' element={<ArtConnect/>} />
          <Route path='/icecuts' element={<IceCuts/>} />
          <Route path='/searchmeup' element={<SearchMeUp/>} />
          <Route path='/surveymonkey' element={<SurveyMonkey/>} />

        </Routes>
    </div>
  );
}

export default App;

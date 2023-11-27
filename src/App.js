import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Lenta from './pages/lenta';
import Profile from './pages/profile';
import Albom from './pages/albom';
import Search from './pages/search';
import Editor from './pages/editor';
import Bars from './pages/bars';
import Chat from './pages/chat';
import Pere from './pages/perepiska';
import Like from './pages/like';
import Story from './pages/story';
import Photo from './pages/photo';
import Warning from './pages/warn';
import Passworl from './pages/passworl';
import Podel from './pages/podel';
import Hist from './pages/hist';
import Parol from './pages/parol';
import New from './pages/new';
import Verst from './pages/verst';
import Knop from './pages/knopky';
import Skala from './pages/skala';
import Podpis from './pages/podpisk';
import Bred from './pages/bredpitt';
import Stranica from './pages/stranica';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Lenta/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/albom' element={<Albom/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/editor' element={<Editor/>}/>
              <Route path='/bars' element={<Bars/>}/>
              <Route path='/chat' element={<Chat/>}/>
              <Route path='/shifr' element={<Pere/>}/>
              <Route path='/like' element={<Like/>}/>
              <Route path='/story' element={<Story/>}/>
              <Route path='/photo' element={<Photo/>}/>
              <Route path='/warn' element={<Warning/>}/>
              <Route path='/passworl' element={<Passworl/>}/>
              <Route path='/podel' element={<Podel/>}/>
              <Route path='/hist' element={<Hist/>}/>
              <Route path='/parol' element={<Parol/>}/>
              <Route path='/new' element={<New/>}/>
              <Route path='/verst' element={<Verst/>}/>
              <Route path='/knopky' element={<Knop/>}/>
              <Route path='/skala' element={<Skala/>}/>
              <Route path='/podpisk' element={<Podpis/>}/>
              <Route path='/bredpitt' element={<Bred/>}/>
              <Route path='/stranica' element={<Stranica/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

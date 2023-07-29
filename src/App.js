import './App.css';
import HomePage from "./pages/HomePage";
import { VideoList } from "./pages/VideoList";
import { WatchLater } from "./pages/WatchLater";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import Playlist from './pages/Playlist';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/videos/watch-later" element={<WatchLater/>} />
      <Route path="/videos/explore" element={<Explore/>} />
      <Route path="/videos/playlist" element={<Playlist/>} />
      <Route path="/videos/:category" element={<VideoList />} />
      <Route path="/" element={<HomePage/>} />
      </Routes>

    </Router>
  );
};

export default App;

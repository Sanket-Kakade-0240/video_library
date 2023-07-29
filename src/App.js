
import './App.css';
import HomePage from "./pages/HomePage";
import { VideoList } from "./pages/VideoList";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/videos/:category" element={<VideoList />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>

    </Router>
  );
};

export default App;

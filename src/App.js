import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HalamanKesatu from './pages/HalamanKesatu';

const App = () => {
 
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HalamanKesatu/>}/>
        </Routes>
      </Router>
  );
}

export default App;

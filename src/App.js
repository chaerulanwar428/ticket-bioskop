import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HalamanKesatu from './pages/HalamanKesatu';
// import HalamanKedua from './pages/HalamanKedua';

const App = () => {
 
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HalamanKesatu/>}/>
          {/* <Route path="/HalamanKedua" element={<HalamanKedua/>}/> */}
        </Routes>
      </Router>
  );
}

export default App;

import Trending from './components/Trending';
import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css";

const App = () => {
 
  return (
    <div>
      <div className="myBG">
      <NavigationBar/>
      <Intro/>
      </div>
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;

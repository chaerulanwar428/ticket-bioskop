import Trending from '../components/Trending';
import '../App.css';
import Intro from '../components/Intro';
import NavigationBar from '../components/NavigationBar';
import "../style/landingpage.css";
import Superhero from '../components/Superhero';

const HalamanKesatu = () => {
 
  return (
    <div>
      <div className="myBG">
      <NavigationBar/>
      <Intro/>
      </div>
      <div className="trending" id="trending">
        <Trending />
      </div>
      <div className="superhero" id="superhero">
        <Superhero/>
      </div>
    </div>
  );
}

export default HalamanKesatu;
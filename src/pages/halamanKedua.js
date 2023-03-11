// import List from '../components/List';
// import '../App.css';
// import "../style/landingpage.css";
// import NavigationBar2 from '../components/NavigationBar2';
// import Trending from '../components/Trending';
import Trending from '../components/Trending';
import '../App.css';
import Intro from '../components/Intro';
import NavigationBar from '../components/NavigationBar';
import "../style/landingpage.css";
import Superhero from '../components/Superhero';


const HalamanKedua = () => {
 
  return (
    // <div>
    //   <NavigationBar2/>
    //   <div className='jadwalbesok'>
    //     <List/>
    //   </div>
    // </div>
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

export default HalamanKedua;
import List from '../components/List';
import '../App.css';
import NavigationBar from '../components/NavigationBar';
import "../style/landingpage.css";
import NavigationBar2 from '../components/NavigationBar2';


const HalamanKedua = () => {
 
  return (
    <div>
      <div className="myBG">
      <NavigationBar2/>
      <div className='jadwalbesok'>
        <List/>
      </div>
      </div>
    </div>
  );
}

export default HalamanKedua;
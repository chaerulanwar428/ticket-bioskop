// import List from '../components/List';
import '../App.css';
import "../style/landingpage.css";
import NavigationBar2 from '../components/NavigationBar2';
import Trending from '../components/Trending';


const HalamanKedua = () => {
 
  return (
    <>
    <div>
      <NavigationBar2/>
      <div className='jadwalbesok'>
        {/* <List/> */}
        <Trending/>
      </div>
    </div>
    </>
  );
}

export default HalamanKedua;
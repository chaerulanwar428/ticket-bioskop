import List from '../components/List';
import '../App.css';
import "../style/landingpage.css";
import NavigationBar2 from '../components/NavigationBar2';


const HalamanKedua = () => {
 
  return (
    <>
    <div>
      <NavigationBar2/>
      <div className='jadwalbesok'>
        <List/>
      </div>
    </div>
    </>
  );
}

export default HalamanKedua;
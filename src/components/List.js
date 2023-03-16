import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import mortalkombatImage from '../assets/images/besok/mortalkombat.jpg';
import inangImage from '../assets/images/besok/inang.jpg';
import bewithyouImage from '../assets/images/besok/bewithyou.jpg';
import rrrImage from '../assets/images/besok/rrr.jpg';
import fullmetalImage from '../assets/images/besok/fullmetal.jpg';
import driftinghomeImage from '../assets/images/besok/driftinghome.jpg';

const List = () => {
    return(
        <Container>
            <br/>
            <h1 className='text-white' >Up Coming</h1>
            <Row>
                <Col md={4} className="movieWrapper">
                <Card className="text-white movieImage">
                <Image src={mortalkombatImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className="text-center">MORTAL KOMBAT</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card lead-in to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="text-white movieImage">
                <Image src={inangImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className="text-center">INANG</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card lead-in to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="text-white movieImage">
                <Image src={bewithyouImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className="text-center">BE WITH YOU</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card lead-in to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="text-white movieImage">
                <Image src={rrrImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className="text-center">RRR</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card lead-in to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="text-white movieImage">
                <Image src={fullmetalImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className="text-center">FULLMETAL ALCHEMIST</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card lead-in to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                <Card className="text-white movieImage">
                <Image src={driftinghomeImage} alt="Dune Movies" className='images'/>
                <div className='bg-dark'>
                    <div className='p-2 m-1 text-white'>
                    <Card.Title className="text-center">DRIFTING HOME</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card lead-in to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
            </Row>
        </Container>
  );
}

export default List;
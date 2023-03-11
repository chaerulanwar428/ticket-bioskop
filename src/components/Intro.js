import {Col,Row, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Intro = () =>{
    const navigate = useNavigate()
    return(
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">NGGA PAKE KARCIS</div>
            <div className="IntroButton mt-4 text-center">
                <Button variant="dark" onClick={()=>navigate('/HalamanKedua')}>CEK JADWAL BESOK</Button>
            </div>   
            </Col>
          </Row>
        </Container>
        </div>
    );
}

export default Intro;
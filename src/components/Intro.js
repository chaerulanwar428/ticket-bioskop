import {Col,Row, Container, Button } from 'react-bootstrap';


const Intro = () =>{    return(
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">NGGA PAKE KARCIS</div>
            <div className="IntroButton mt-4 text-center">
                <Button variant="dark">PROMO TANGGAL 30 FEBRUARI</Button>
            </div>   
            </Col>
          </Row>
        </Container>
        </div>
    );
}

export default Intro;
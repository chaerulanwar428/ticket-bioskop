import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
 
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">CRTV Cinema</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#jadwalbesok">UPCOMING</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
  }
  
export default NavigationBar;
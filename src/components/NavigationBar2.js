import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar2 = () => {
 
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">CRTV Cinema</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Kembali</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
  }
  
export default NavigationBar2;
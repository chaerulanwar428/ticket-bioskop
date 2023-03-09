import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
 
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>CRTV Cinema</Navbar.Brand>
                    <Nav>
                        <Nav.Link>TRENDING</Nav.Link>
                        <Nav.Link>SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
  }
  
export default NavigationBar;
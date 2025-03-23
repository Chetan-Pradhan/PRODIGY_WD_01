import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" style={{ backdropFilter: "blur(10px)" }}>
        <Container>
          <div>
            <Navbar.Brand href="#home">CarInfo</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" style={{ color: "white" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "white" }}>
                  Car models
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "white" }}>
                  Variants
                </Nav.Link>

                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Pricing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Design</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Features
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

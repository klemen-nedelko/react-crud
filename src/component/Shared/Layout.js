import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout(props){
    return <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Crud example</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add-product">Add Product</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </>;
}

export default Layout;
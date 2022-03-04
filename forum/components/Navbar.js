import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AppNavbar({ user }) {
  return (

    <Navbar bg="black" expand="lg" style={{ marginBottom: "25px", borderRadius: "5px" }}>

      <Container>
        <Navbar.Brand style={{ color: "#cc2b5e", fontWeight:"bold" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span className="logo"><img src="images/logo.png" width="40" height="35" className="d-inline-block align-center" alt="" />  devHuß-Wiki</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Link href="/">
              <a className="nav-link" style={{ color: "#47CACC", fontWeight:"bold" }} >Home</a>
            </Link>
            {user && (
              <>
                <Link href="/write">
                  <a className="nav-link" style={{ color: "#47CACC", fontWeight:"bold" }}>New Article</a>
                </Link>
                <Link href="/logout" >
                  <a className="nav-link" style={{ color: "#47CACC", fontWeight:"bold" }}>Log Out</a>
                </Link>
              </>
            )}
            {!user && (
              <Link href="/login">
                <a className="nav-link" style={{ color: "#47CACC", fontWeight:"bold" }}>Log In to Write</a>
              </Link>
            )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

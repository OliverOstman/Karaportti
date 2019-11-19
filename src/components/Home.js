import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";
import {NavLink} from "react-router-dom";

class Home extends Component{
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Karaportti'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Navbar.Text>
                                <NavLink to="/home">Home</NavLink>
                            </Navbar.Text>
                        </Nav>
                        <Navbar.Text>
                            <NavLink src={logo} to="/settings">Asetukset</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

                <Nav>
                    <h1 id="important">.</h1>
                </Nav>
            </div>
        )
    }
}

export default Home;
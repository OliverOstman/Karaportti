import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect, NavLink
} from "react-router-dom";
import Front from "./components/Front";
import Settings from "./components/Settings";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";

class App extends Component{
    state = {

    };

    PaloModal = () => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    };

    render() {
        return (
            <Router>
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
                        <h1 id="important">Palohälytys</h1>
                    </Nav>

                    <this.PaloModal/>
                </div>

                <Route path="/settings" component={Settings}/>
                <Route path="/home" component={Front}/>
                <Redirect to="/home"/>
            </Router>
        );
    }
}

export default App;

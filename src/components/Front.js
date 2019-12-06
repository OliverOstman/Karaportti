import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";

class Front extends Component{
    nav;

    componentDidMount() {
        this.nav = document.getElementById("Navbar");
        this.nav.style = "display: flex"
    }

    render() {
        return (
            <div className="content">
                <Col xs={6} className="kortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Aula</h1>
                        </Card.Header>
                        <Card.Body>
                            <NavLink to="/Info">
                                <Button variant="info">Aula</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="kortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Bussit</h1>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="info"
                                    href="https://hsl.trapeze.fi/traveller/web?command=fullscreen&id=MetAKK&title=Karaportti%202&cols=2&offset=180">
                                HSL sivu</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="kortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Ruokalista</h1>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="info" href="http://users.metropolia.fi/~villeope/ruokalista/">Ruokalista</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Front;
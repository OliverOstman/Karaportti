import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Settings extends Component{
    red;
    Text;
    select;
    remove;
    text2;
    backRemove;
    scroll;
    timeSelect;

    componentDidMount() {
        this.red = document.getElementById("red");
        this.Text = document.getElementById("important");
        this.select = document.getElementById("select");
        this.timeSelect = document.getElementById("timeSelect");
        this.remove = document.getElementById("remove");
        this.text2 = document.getElementById("palo");
        this.backRemove = document.getElementById("removeBack");
        this.scroll = document.getElementById("NavImp");
        if (this.props.background !== 0) {
            this.backRemove.style.display = "initial";
        }
    }

    changeTime = (e) => {
        e.preventDefault();
        this.props.time(this.timeSelect.options[this.timeSelect.selectedIndex].value);
    };

    getText = (e) => {
        e.preventDefault();
        this.Text.style.display = "initial";
        this.Text.innerText = this.red.value;
        this.remove.style.display = "initial";
    };

    removeText = (e) => {
        e.preventDefault();
        this.Text.style.display = "none";
        this.Text.innerText = "";
        this.remove.style.display = "none";
    };

    setText = (e) => {
        e.preventDefault();
        this.props.changeBody(this.text2.value);
        this.props.show();
    };

    removeBack = (e) => {
        e.preventDefault();
        this.props.changeBackground("0");
        this.backRemove.style.display = "none";
    };

    getValue = (e) => {
        e.preventDefault();
        this.props.changeBackground(this.select.options[this.select.selectedIndex].value);
        this.backRemove.style.display = "initial";
    };

    startScroll = (e) => {
        e.preventDefault();
        this.scroll.classList.add("scroll")
    };

    removeScroll = (e) => {
        e.preventDefault();
        this.scroll.classList.remove("scroll")
    };

    render() {
        return(
            <div className="content">
                <Col xs={6} className="settingsKortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Taustakuva</h1>
                        </Card.Header>
                        <Card.Body>
                            <select id="select">
                                <option value="1">Talvi</option>
                                <option value="2">Kevät/Kesä</option>
                                <option value="3">Syksy</option>
                            </select>
                            <Button onClick={this.getValue}>Select</Button>
                            <Button id="removeBack" onClick={this.removeBack}>Remove</Button>
                            <br/>
                            <a href="https://webdev-public.metropolia.fi/taustakuvat/">Taustakuvat oma.metropolia:sta</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="settingsKortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Tärkeä tiedote</h1>
                        </Card.Header>
                        <Card.Body id="displayFlex">
                            <textarea id="red" defaultValue="Tähä laittaa jtn joka näkyy sitte sillain ylälaidassa punaisella taustalla" maxLength="115"/>
                            <div className="flex">
                                <Col xs={4}>
                                    <Button onClick={this.getText}>Send</Button>
                                </Col>
                                <Col xs={4}>
                                    <Button onClick={this.startScroll}>Scroll</Button>
                                </Col>
                                <Col xs={4}>
                                    <Button id="scroll" onClick={this.removeScroll}>Remove scroll</Button>
                                </Col>
                                <Col xs={4}>
                                    <Button id="remove" onClick={this.removeText}>Remove</Button>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="settingsKortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Palohälytys</h1>
                        </Card.Header>
                        <Card.Body>
                            <textarea id="palo" defaultValue="Palohälytys harjoitus tai kaikki ulos" maxLength="225"/>
                            <Button onClick={this.setText}>Send</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="settingsKortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Ajastus</h1>
                        </Card.Header>
                        <Card.Body>
                            <select id="timeSelect">
                                <option value="1">10s</option>
                                <option value="2">15s</option>
                                <option value="3">20s</option>
                                <option value="4">25s</option>
                                <option value="5">30s</option>
                            </select>
                            <Button onClick={this.changeTime}>Select</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Settings;
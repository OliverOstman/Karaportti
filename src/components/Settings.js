import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class Settings extends Component{
    red;
    Text;
    select;
    remove;
    text2;
    backremove;
    scroll;

    componentDidMount() {
        this.red = document.getElementById("red");
        this.Text = document.getElementById("important");
        this.select = document.getElementById("select");
        this.remove = document.getElementById("remove");
        this.text2 = document.getElementById("palo");
        this.backremove = document.getElementById("removeBack");
        this.scroll = document.getElementById("NavImp");
        if (this.props.background !== 0) {
            this.backremove.style.display = "initial";
        }
    }

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
        this.backremove.style.display = "none";
    };

    getValue = (e) => {
        e.preventDefault();
        this.props.changeBackground(this.select.options[this.select.selectedIndex].value);
        this.backremove.style.display = "initial";
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
                            <button onClick={this.getValue}>Select</button>
                            <button id="removeBack" onClick={this.removeBack}>Remove</button>
                            <br/>
                            <a href="https://webdev-public.metropolia.fi/taustakuvat/">Lista jtn oma.metropolian käyttämiä taustakuvia</a>
                            <p>(Lisänä pyhät/lomat joulu, pääsiäinen, halloween?)</p>
                            <p>(lisänä tapa ladata oma kuva?)</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="settingsKortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Tärkeä tiedote</h1>
                        </Card.Header>
                        <Card.Body>
                            <textarea id="red" defaultValue="Tähä laittaa jtn joka näkyy sitte sillain ylälaidassa punaisella taustalla" maxLength="115"/>
                            <button onClick={this.getText}>Send</button>
                            <button onClick={this.startScroll}>Scroll</button>
                            <button id="scroll" onClick={this.removeScroll}>Remove scroll</button>
                            <button id="remove" onClick={this.removeText}>Remove</button>
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
                            <button onClick={this.setText}>Send</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} className="settingsKortti">
                    <Card bg="dark" text="white" border="dark">
                        <Card.Header>
                            <h1>Lisää tiedote?</h1>
                        </Card.Header>
                        <Card.Body>
                            <textarea defaultValue="Otsikko" />
                            <textarea defaultValue="Ite tiedote" />
                            <p>(Tapa jolla poistaa vanhoja tiedotteita ja/tai automaattinen poisto x päivien päästä)</p>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Settings;
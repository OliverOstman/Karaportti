import React, {Component} from "react";

class Settings extends Component{
    red;
    Text;
    select;
    remove;
    text2;
    backremove;

    componentDidMount() {
        this.red = document.getElementById("red");
        this.Text = document.getElementById("important");
        this.select = document.getElementById("select");
        this.remove = document.getElementById("remove");
        this.text2 = document.getElementById("palo");
        this.backremove = document.getElementById("removeBack");
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

    render() {
        return(
            <div>
                <div className="settings">
                    <h1>Taustakuva</h1>
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
                </div>
                <div className="settings">
                    <h1>Tärkeä tiedote</h1>
                    <textarea id="red">
                        Tähä laittaa jtn joka näkyy sitte sillain ylälaidassa punaisella taustalla
                    </textarea>
                    <button onClick={this.getText}>Send</button>
                    <button id="remove" onClick={this.removeText}>Remove</button>
                </div>
                <div className="settings">
                    <h1>Palohälytys</h1>
                    <textarea id="palo">Palohälytys harjoitus tai kaikki ulos</textarea>
                    <button onClick={this.setText}>Send</button>
                </div>
                <div className="settings">
                    <h1>Lisää tiedote?</h1>
                    <textarea>Otsikko</textarea>
                    <textarea>Ite tiedote</textarea>
                    <p>(Tapa jolla poistaa vanhoja tiedotteita ja/tai automaattinen poisto x päivien päästä)</p>
                </div>
            </div>
        )
    }
}

export default Settings;
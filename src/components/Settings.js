import React, {Component} from "react";

class Settings extends Component{
    red;
    Text;
    select;
    ans;
    remove;
    text2;

    componentDidMount() {
        this.red = document.getElementById("red");
        this.Text = document.getElementById("important");
        this.select = document.getElementById("select");
        this.ans = document.getElementById("ans");
        this.remove = document.getElementById("remove");
        this.text2 = document.getElementById("palo");
    }

    getText = (e) => {
        e.preventDefault();
        this.Text.style.display = "block";
        this.Text.innerText = this.red.value;
        this.remove.style.display = "";
    };

    removeText = (e) => {
        e.preventDefault();
        this.Text.style.display = "none";
        this.Text.innerText = "";
        this.remove.style.display = "none";
    };

    setText = (e) => {
        e.preventDefault();
        /*
        console.log(modal.innerText);
        console.log(text2.value);
        modal.innerText = text2.value;
        */
    };

    getValue = (e) => {
        e.preventDefault();
        console.log(this.select.options[this.select.selectedIndex].value);
        console.log(this.select.options[this.select.selectedIndex].text);
        this.ans.innerText = '"' + this.select.options[this.select.selectedIndex].text + " Selected";
    };

    render() {
        return(
            <div>
                <div className="settings">
                    <h1>Taustakuva</h1>
                    <select id="select">
                        <option value="1">Talvi</option>
                        <option value="2">Kevät</option>
                        <option value="3">Kesä</option>
                        <option value="4">Syksy</option>
                    </select>
                    <button onClick={this.getValue}>Select</button>
                    <p id="ans"></p>
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
                    <button>Modal!</button>
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
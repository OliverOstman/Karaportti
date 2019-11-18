import React, {Component} from "react";

class Settings extends Component{
    render() {
        return(
            <div>
                <h1>Tässä tärkeä tiedote</h1>
                <div>
                    <h1>Taustakuva</h1>
                    <select>
                        <option value="1">Talvi</option>
                        <option value="2">Kevät</option>
                        <option value="3">Kesä</option>
                        <option value="4">Syksy</option>
                    </select>
                    <button onClick="">Select</button>
                    <p id="ans"></p>
                    <a href="https://webdev-public.metropolia.fi/taustakuvat/">Lista jtn oma.metropolian käyttämiä taustakuvia</a>
                    <p>(Lisänä pyhät/lomat joulu, pääsiäinen, halloween?)</p>
                    <p>(lisänä tapa ladata oma kuva?)</p>
                </div>
                <div>
                    <h1>Tärkeä tiedote</h1>
                    <textarea id="red">
                        Tähä laittaa jtn joka näkyy sitte sillain ylälaidassa punaisella taustalla
                    </textarea>
                    <button onClick="">Send</button>
                    <button id="remove" onClick="">Remove</button>
                </div>
                <div>
                    <h1>Palohälytys</h1>
                    <textarea id="palo">Palohälytys harjoitus tai kaikki ulos</textarea>
                    <button>Modal!</button>
                </div>
                <div>
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
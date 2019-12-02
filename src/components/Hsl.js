import React, {Component} from "react";

class Hsl extends Component{
    nav;

    componentDidMount() {
        this.nav = document.getElementById("Navbar");
        this.nav.style = "display: none"
    }

    render() {
        return (
            <div id="hslDiv">
                <iframe id="iframe" title="HSL" src="https://hsl.trapeze.fi/traveller/web?command=fullscreen&id=MetAKK&title=Karaportti%202&cols=2&offset=180" />
            </div>
        )
    }
}

export default Hsl;
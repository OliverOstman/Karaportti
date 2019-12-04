import React, {Component} from "react";

class Hsl extends Component{
    state = {
        iframeSrc: 1,
    };
    nav;
    iframe;
    interval;

    componentDidMount() {
        this.nav = document.getElementById("Navbar");
        this.iframe = document.getElementById("iframe");
        this.nav.style = "display: none";
        this.interval = setInterval(
            function() {
                console.log("vaihto");
                if (this.state.iframeSrc === 1) {
                    this.setState({iframeSrc: 2});
                } else {
                    this.setState({iframeSrc: 1});
                }
            }
                .bind(this),
            30000
        );
    }

    iframeChange = () => {
        if (this.state.iframeSrc === 1) {
            return (
                <iframe id="iframe" title="HSL" src="https://hsl.trapeze.fi/traveller/web?command=fullscreen&id=MetAKK&title=Karaportti%202&cols=2&offset=180"
                key={1}/>
            );
        } else {
            return (
                <iframe id="iframe" title="HSL" src="http://users.metropolia.fi/~villeope/ruokalista/"
                key={2}/>
            );
        }
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div id="hslDiv">
                {this.iframeChange()}
            </div>
        )
    }
}

export default Hsl;
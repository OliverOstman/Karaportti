import React, {Component} from "react";

class Hsl extends Component{
    state = {
        iframeSrc: 1,
        time: 30000,
    };
    nav;
    iframe;
    interval;
    timeout;

    componentDidMount() {
        this.timeChange();
        this.nav = document.getElementById("Navbar");
        this.iframe = document.getElementById("iframe");
        this.nav.style = "display: none";
    }

    timeChange = () => {
      if (this.props.time === "1") {
          this.setState({time: 10000});
      } else if (this.props.time === "2") {
          this.setState({time: 15000});
      } else if (this.props.time === "3") {
          this.setState({time: 20000});
      } else if (this.props.time === "4") {
          this.setState({time: 25000});
      } else if (this.props.time === "5") {
          this.setState({time: 30000});
      }
      setTimeout(
        function () {
            this.interval = setInterval(
                function() {
                    console.log("vaihto");
                    if (this.state.iframeSrc === 1) {
                        this.setState({iframeSrc: 2});
                    } else if (this.state.iframeSrc === 2) {
                        this.setState({iframeSrc: 3});
                    } else {
                        this.setState({iframeSrc: 1});
                    }
                }
                    .bind(this),
                this.state.time
            );
        }
            .bind(this),1
      );
    };

    iframeChange = () => {
        if (this.state.iframeSrc === 1) {
            return (
                <iframe id="iframe" title="HSL" src="https://hsl.trapeze.fi/traveller/web?command=fullscreen&id=MetAKK&title=Karaportti%202&cols=2&offset=180"
                key={1}/>
            );
        } else if (this.state.iframeSrc === 2) {
            return (
                <iframe id="iframe" title="HSL" src="http://users.metropolia.fi/~villeope/ruokalista/"
                key={2}/>
            );
        } else {
            return (
                <iframe id="iframe" title="HSL" src="http://users.metropolia.fi/~tuomasmy/infonaytto/info.html"
                        key={3}/>
            )
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
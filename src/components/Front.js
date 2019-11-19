import React, {Component} from 'react';

class Front extends Component{
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>4 Kerros</h1>
                    <a href="/">4 kerros</a>
                </div>
                <div className="box">
                    <h1>Aula</h1>
                    <a href="/">Aula</a>
                </div>
                <div className="box">
                    <h1>Bussit</h1>
                    <a href="https://hsl.trapeze.fi/traveller/web?command=fullscreen&id=MetAKK&title=Karaportti&cols=2&offset=180">HSL</a>
                </div>
                <div className="box">
                    <h1>Ruokalista</h1>
                    <a href="http://users.metropolia.fi/~villeope/ruokalista/">Ruokalista</a>
                </div>
            </div>
        )
    }
}

export default Front;
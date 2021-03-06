import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect, NavLink
} from "react-router-dom";
import Front from "./components/Front";
import Settings from "./components/Settings";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import logo from "./metro-logo.png";
import Nav from "react-bootstrap/Nav";
import {IoIosSettings} from "react-icons/io";
import {IoIosHome} from "react-icons/io"
import { IconContext } from "react-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import OnePage from "./components/OnePage";
import Hsl from "./components/Hsl";

class App extends Component{
    state = {
        modalShow: false,
        modalBody: "",
        modalTitle: "Palohälytys",
        background: "1",
        time: "2",
    };
    body;

    hide = () => this.setState({modalShow: false});
    open = () => this.setState({modalShow: true});
    changeBody = (text) => this.setState({modalBody: text});
    changeBackground = (selected) => this.setState({background: selected});
    changeTime = (selected) => this.setState({time: selected});

    componentDidMount() {
        this.body = document.getElementById("keho");
        if (this.state.background === "1") {
            this.body.style.backgroundImage = "url('https://webdev-public.metropolia.fi/taustakuvat/tausta_idp-talvi.jpg')";
        } else if (this.state.background === "2") {
            this.body.style.backgroundImage = "url('https://webdev-public.metropolia.fi/taustakuvat/tausta_idp-kevatkesa.jpg')";
        }else if (this.state.background === "3") {
            this.body.style.backgroundImage = "url('https://webdev-public.metropolia.fi/taustakuvat/tausta_idp.jpg')";
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.background === "0") {
            this.body.style.backgroundImage = "none";
        } else if (this.state.background === "1") {
            this.body.style.backgroundImage = "url('https://webdev-public.metropolia.fi/taustakuvat/tausta_idp-talvi.jpg')";
        } else if (this.state.background === "2") {
            this.body.style.backgroundImage = "url('https://webdev-public.metropolia.fi/taustakuvat/tausta_idp-kevatkesa.jpg')";
        }else if (this.state.background === "3") {
            this.body.style.backgroundImage = "url('https://webdev-public.metropolia.fi/taustakuvat/tausta_idp.jpg')";
        }
    }

    myModal = () => {
      return (
          <Modal show={this.state.modalShow} onHide={this.hide} animation={false}
                 size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered>
              <Modal.Header id="modalsHeader">
                  <h1 id="modalH1" className="headerModal">
                      {this.state.modalTitle}
                  </h1>
              </Modal.Header>
              <Modal.Body>
                  <h4 id="modalH4" className="headerModal">
                      {this.state.modalBody}
                  </h4>
              </Modal.Body>
          </Modal>
      )
    };

    renderHomeTooltip = (props) => {
        return <Tooltip {...props}>Home</Tooltip>;
    };

    renderSettingsTooltip = (props) => {
        return <Tooltip {...props}>Settings</Tooltip>;
    };

    render() {
        return (
            <Router basename='/~olivero/karaportti/'>
                <div>
                    <Navbar bg="dark" expand="lg" variant="dark" id="Navbar">
                        <Navbar.Brand>
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' Karaportti'}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Navbar.Text>
                                    <OverlayTrigger placement="right"
                                                    delay={{ show: 350, hide: 100 }}
                                                    overlay={this.renderHomeTooltip}>
                                        <NavLink to="/home">
                                            <IconContext.Provider value={{size: "1.5rem" }}>
                                                <IoIosHome />
                                            </IconContext.Provider>
                                        </NavLink>
                                    </OverlayTrigger>
                                </Navbar.Text>
                            </Nav>
                            <Navbar.Text>
                                <OverlayTrigger placement="left"
                                                delay={{ show: 350, hide: 100 }}
                                                overlay={this.renderSettingsTooltip}>
                                <NavLink to="/settings">
                                    <IconContext.Provider value={{size: "1.5rem" }}>
                                    <IoIosSettings />
                                    </IconContext.Provider>
                                </NavLink>
                                </OverlayTrigger>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>

                    <Nav id="NavImp" >
                        <h2 id="important">
                            Tärkeä tiedote
                        </h2>
                    </Nav>

                    <this.myModal/>
                </div>

                <Route path="/settings" render={(props) => (
                    <Settings {...props} show={this.open} changeBody={this.changeBody} changeBackground={this.changeBackground}
                              background={this.state.background} time={this.changeTime}/>
                )}/>
                <Route path="/Info" render={(props) => (
                    <Hsl {...props} time={this.state.time}/>
                )}/>
                <Route path="/home" component={Front}/>
                <Route path="/OnePage" component={OnePage}/>
                <Redirect to="/home"/>
            </Router>
        );
    }
}

export default App;

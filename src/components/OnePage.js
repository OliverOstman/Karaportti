import React, {Component} from "react";
import Card from "react-bootstrap/Card";

class OnePage extends Component{
    bus;
    food;
    items;

    componentDidMount() {
        this.bus = document.getElementById("bussit");
        this.food = document.getElementById("ruoka");
        this.busses();
        this.menu();
    }

    laske = (sec) => {
        let min = 0;
        let hour = 0;
        while (sec >= 0) {
            if (min === 60) {
                hour++;
                min = 0;
            } if (sec >= 60) {
                min++;
                sec = sec - 60;
            } else if (sec < 60) {
                break;
            }
        }
        if (hour >= 24) {
            hour = hour - 24;
            if (hour < 10) {
                hour = "0" + hour;
            }
            hour = "Next day: " + hour;
        } if (hour < 10) {
            hour = "0" + hour;
        } if (min < 10) {
            return hour + ":0" + min;
        } else {
            return hour + ":" + min;
        }
    };

    busses = () => {
        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/graphql"
            },
            body:
                "{\n	nearest(lat: 60.223902, lon: 24.758145, maxResults: 50, maxDistance: 600, filterByPlaceTypes: DEPARTURE_ROW) " +
                "{\n    edges " +
                "{\n      node " +
                "{\n        place " +
                "{\n          ...on DepartureRow " +
                "{\n            stop " +
                "{\n              name\n            " +
                "}\n            stoptimes " +
                "{\n              serviceDay\n              scheduledDeparture\n              realtimeDeparture\n              trip " +
                "{\n                route " +
                "{\n                  shortName\n                  longName\n                " +
                "}\n              " +
                "}\n              headsign\n            " +
                "}\n          " +
                "}\n        " +
                "}\n      	distance\n      " +
                "}\n    }\n  }\n}"
        };

        fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql", settings).then(response => {
            return response.json();
        }).then(json => {
            let objects = "";
            let day = json.data.nearest.edges[0].node.place.stoptimes[0].serviceDay;
            for (let i=0; i<json.data.nearest.edges.length; i++) {
                if (json.data.nearest.edges[i].node.place.stoptimes[0] !== undefined && json.data.nearest.edges[i].node.place.stoptimes[0].serviceDay === day) {
                    let departure = this.laske(json.data.nearest.edges[i].node.place.stoptimes[0].realtimeDeparture);
                    objects = objects + "<p>" +
                        json.data.nearest.edges[i].node.place.stop.name + " - " +
                        json.data.nearest.edges[i].node.distance + "m - " +
                        json.data.nearest.edges[i].node.place.stoptimes[0].trip.route.shortName + " - " +
                        json.data.nearest.edges[i].node.place.stoptimes[0].headsign + " - " +
                        departure + "<br />" + "</p>";
                }
            }
            this.bus.innerHTML = this.bus.innerHTML + objects;
        });
    };

    menu = () => {
      fetch("http://cors-anywhere.herokuapp.com/https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=3208&language=fi").then(response => {
              return response.json();
          }).then(json => {
          console.log(json);
          this.items = json;
          })
    };

    render() {
            return (
                <div className="content">
                    <Card bg="dark" text="white" border="dark" className="half">
                        <Card.Header>
                            <h1>bussit</h1>
                        </Card.Header>
                        <Card.Body>
                            <p id="bussit"></p>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" border="dark" className="half">
                        <Card.Header>
                            <h1>ruoka</h1>
                        </Card.Header>
                        <Card.Body>
                            <p id="ruoka"></p>
                        </Card.Body>
                    </Card>
                </div>
            )
        }
}

export default OnePage;
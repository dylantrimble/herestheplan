import React, { Component } from "react";
import "../css/main.css";
import Card from "../components/Card/card";
import EventModal from "../components/EventModal/eventModal"

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      latLocation: 0,
      lngLocation: 0,
      value: ""
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const geoUrl = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    fetch(geoUrl, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(
      results => {
        this.setState({
          latLocation: results.location.lat,
          lngLocation: results.location.lng
        })
        const url =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=25000&type=" + this.state.value + "&key=" +
        process.env.REACT_APP_GOOGLE_API_KEY + "&location=" + this.state.latLocation + "," + this.state.lngLocation;
        fetch(proxyurl + url)
        .then(res => res.json())
        .then(
          results => {
            this.setState({
              isLoaded: true,
              items: results.results
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          ); 
        }
        )
      }
      
  thePlan = (e) => {
    this.setState({
      value: e.target.value
    })
    this.componentDidMount();

  }

  dollarFunc = jakesHappieness => {
    switch (jakesHappieness) {
      case 1:
        return "$";
      case 2:
        return "$$";
      case 3:
        return "$$$";
      case 4:
        return "$$$$";
      case 5:
        return "$$$$$";
      default:
        return "No price range to display";
    }
  };

  render() {
    return (
      <div className="mainBody">
        <div className="searchDiv">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              What's the plan?
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="amusement_park">Amusement Park</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="aquarium">Aquarium</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="bakery">Bakery</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="bar">Bar</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="bowling_alley">Bowling Alley</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="cafe">Cafe</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="casino">Casino</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="shopping_mall">Mall</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="movie_theater">Movie Theater</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="museum">Museum</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="night_club">Night Club</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="parking">Parking</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="restaurant">Restaurant</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="tourist_attraction">Popular For Tourists</button>
              <button className="dropdown-item" onClick={this.thePlan} type="button" value="zoo">Zoo</button>
            </div>
          </div>
          <div className="divContainer">
            {this.state.value ?
            this.state.items.map(item => (
              <Card
                name={item.name}
                rating={item.rating}
                price={this.dollarFunc(item.price_level)}
                location={item.vicinity}
              />
            )) : <div></div>}
          </div>
        </div>
      </div>
    );
  }

}
export default Main;

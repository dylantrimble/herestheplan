import React, { Component } from "react";
import "../css/main.css";
import Card from "../components/Card/card";

class Main extends Component{
  constructor(props){
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
          console.log(results)
          this.setState({
            // latLocation: results.location.lat,
            // lngLocation: results.location.lng
          })
          const url =
            "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&type=" + this.state.input + "&key=" +
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
      <div class="mainBody">
      <div className="searchDiv">
        <form className="formSearchBar">
          <input type="text" class="searchBar" input={this.state.value} onChange={this.handleChange}/>
          <br />
          <button class="searchButton" type="submit" value="Submit">
            Search
          </button>
        </form>
        {/* <div className="divContainer">
          {props.items.map(item => (
            <Card
            name={item.name}
            rating={item.rating}
            price={props.dollarFunc(item.price_level)}
            location={item.vicinity}
            /> */}
            ))}
        </div>
      </div>
  );
}

}
export default Main;

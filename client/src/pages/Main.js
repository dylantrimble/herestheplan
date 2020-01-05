import React from "react";
import "../css/main.css";
import Card from "../components/Card/card";

function Main(props) {
  return (
    <div class="mainBody">
      <div className="searchDiv">
        <form className="formSearchBar">
          <input type="text" class="searchBar" />
          <br />
          <button class="searchButton" type="submit">
            Search
          </button>
        </form>
        <div className="divContainer">
          {props.items.map(item => (
            <Card
              name={item.name}
              rating={item.rating}
              price={props.dollarFunc(item.price_level)}
              location={item.vicinity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

import { useState } from "react";
import "./styles.css";
const TravelDB = {
  WeekendBreak: [
    { name: "TankBund", rating: "4/5" },
    { name: "Lumbini Park", rating: "3.5/5" },
    { name: "Wonder Law", rating: "4/5" }
  ],

  PackageHoliday: [
    {
      name: "Vishakhapatnam",
      rating: "5/5"
    },
    {
      name: "Mumbai",
      rating: "4.5/5"
    },
    {
      name: "Banglore",
      rating: "4/5"
    }
  ],
  GroupTour: [
    {
      name: "Goa",
      rating: "4/5"
    },
    {
      name: "Kashmir",
      rating: "5/5"
    },
    {
      name: "Delhi",
      rating: "4/5"
    }
  ]
};
export default function App() {
  var travelType = Object.keys(TravelDB);
  var [places, setPlaces] = useState([]);
  function clickHandler(item) {
    setPlaces(TravelDB[item]);
  }
  return (
    <div className="App">
      <h1> 🚗 Travel Guide Sugessions ✈</h1>
      <p>
        From <span class="special">Hyderabad</span>
      </p>
      {travelType.map((item, index) => {
        return (
          <button
            class="btn-tour"
            key={index}
            onClick={() => clickHandler(item)}
          >
            {item}
          </button>
        );
      })}
      {places.map((place, index) => {
        return (
          <div class="places" key={index}>
            <h2>{place.name}</h2>
            <p>{place.rating}</p>
          </div>
        );
      })}
    </div>
  );
}

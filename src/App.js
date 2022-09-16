import "./styles.css";
import React,{useState} from "react";

const placesGiven = {
  Kerala:[
    {
      title:"Climate",
      rating:"4/5" 
    },
    {
      title:"Food",
      rating:"5/5"
    },
    {
      title:"Side-seeing",
      rating:"5/5"
    }
 ],
 Delhi:[
  {
    title:"Climate",
    rating:"3/5" 
  },
  {
    title:"Food",
    rating:"4/5"
  },
  {
    title:"Side-seeing",
    rating:"4/5"
  }
 ],
 Banglore:[
  {
    title:"Climate",
    rating:"5/5" 
  },
  {
    title:"Food",
    rating:"4/5"
  },
  {
    title:"Side-seeing",
    rating:"3/5"
  }
 ]
};

// const placDict=Object.keys(placesGiven);
export default function App() {
  const[places,setPlaces]= useState("Kerala");
  function firstClickHandler(inputVal){
    setPlaces(inputVal);
  }
  return (
    <div className="App">
      <div>
      <h1>Best Places to Explore!✈️</h1>
      {Object.keys(placesGiven).map((genre) => (
          <button
            onClick={() => firstClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      
      {/* <button onClick={() => firstClickHandler("Kerala")}
      style={{padding:"1rem",fontSize:"1rem",backgroundColor:"cyan",margin:"1rem",cursor:"pointer"}}
      >Kerala</button>
      <button onClick={() => firstClickHandler("Delhi")}
      style={{padding:"1rem",fontSize:"1rem",backgroundColor:"cyan",margin:"1rem",cursor:"pointer"}}
      >Delhi</button>
      <button onClick={() => firstClickHandler("Banglore")}
      style={{padding:"1rem",fontSize:"1rem",backgroundColor:"cyan",margin:"1rem",cursor:"pointer"}}
      >Banglore</button> */}
    </div>
    <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {placesGiven[places].map((place) => (
              <li
                key={place.title}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {place.title} </div>
                <div style={{ fontSize: "smaller" }}> {place.rating} </div>
              </li>
            ))}
          </ul>
        </div>
    </div>

  );
}

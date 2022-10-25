import "./styles.css";
import React, { useState } from "react";

const placesGiven = {
  Kerala: [
    {
      title: "Climate",
      description:
        "Kerala overall has a good climate except for the humidity, therefore its best to vist between September and March when the humidity is comparitively less. ",
      rating: "4/5"
    },
    {
      title: "Food",
      description:
        "The prominent delicasies of Kerala cuisine inclue fish in a variety of ways-in spicy,tangy curries or simply fried in fresh coconut oil.The region is also famous for Sandhya that includes rice and a host of vegetarian dishes served on a banana leaf.",
      rating: "5/5"
    },
    {
      title: "Side-seeing",
      description:
        "Kerala is named as one of the 10 paradises of the world. Especially known for its ecotourism initiatives and beautiful backwaters. Venice of East also known as Alleppey is a must visit.",
      rating: "5/5"
    }
  ],
  Delhi: [
    {
      title: "Climate",
      description:
        "Delhi has an extreme climate. It is very hot in summer and cold in winter. The best time to visit Delhi is from October to March when the weather is at its best. During this period flowers are at their blooming best, the weather is pleasent and enjoyable to experience Incredible Delhi.",
      rating: "2/5"
    },
    {
      title: "Food",
      description:
        "Food culture in Delhi is a mixture of North Indian food, Mughlai Cuisines, Punjabi food and mouth watering street food. Paranthas, chaat, butter chicken, kebabs, chole bhature, biryani, rolls, samosa, and gol gappa are some of the best foods that you must try in Delhi.",
      rating: "4/5"
    },
    {
      title: "Side-seeing",
      description:
        "Delhi showcases an ancient culture and a rapidly modernising country. Dotted with monuments there is much to discover here. The seat of many powerful empires in the past, its long history can be traced in its many carefully-preserved monuments, ancient forts and tombs.",
      rating: "4/5"
    }
  ],
  Bangalore: [
    {
      title: "Climate",
      description:
        "The climate here is moderate and pleasant all year round with very little humidity. The winter months that is from October-February are the best time to visit the city. It doesn't really get very cold with the lowest temperature dipping to about 10°C. With so many lakes and gardens to visit, sightseeing and outdoor activities are most comfortable at this time.",
      rating: "5/5"
    },
    {
      title: "Food",
      description:
        "Bangalore offers a diverse variety of appetizing dishes. From South Indian cuisine to Chinese cuisine, the city boasts a perfect blend of traditional as well continental cuisines.",
      rating: "4/5"
    },
    {
      title: "Side-seeing",
      description:
        " The list of activities to do in Bangalore prick everyone's interest are camping at Nandi Hills, Stroll in Lalbagh, Picnic at Cubbon Park, Shopping at MG Road, Night Trek in Skandagiri, Day Outing at Guhantara, Have Fun at Wonderla, Visit Bangalore Palace, Sunrise Trek at Uttari Betta and many more.",
      rating: "3/5"
    }
  ]
};

// const placDict=Object.keys(placesGiven);
export default function App() {
  const [places, setPlaces] = useState("Kerala");
  function firstClickHandler(inputVal) {
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
              color: "blue",
              fontWeight: "bold",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid blue",
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
                //color:"#0e7490",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {place.title} </div>
              <div
                style={{
                  fontSize: "medium",
                  color: "blue",
                  fontWeight: "bold"
                }}
              >
                {" "}
                {place.rating}{" "}
              </div>
              <div style={{ fontSize: "larger" }}> {place.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

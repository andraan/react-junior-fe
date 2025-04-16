import React, { useState, useEffect } from "react";
import Label from "./Label";
import "./App.css";

function App() {
  let [image, setImage] = React.useState("");
  let [counter, setCounter] = useState(0);

  React.useEffect(() => {
    async function fetchFunctions() {
      // Query with search:
      // var url = 'https://api.giphy.com/v1/gifs/search?q=skate&limit=10&api_key=API_KEY'

      // Query with random GIFs
      // var url = 'https://api.giphy.com/v1/gifs/random?api_key=API_KEY'

      var url = "";
      const data = await fetch(url);
      data.json().then((data) => {
        console.log("data: ", data);
        setImage(data.data.images.downsized_large.url);
      });
    }
    fetchFunctions();
  }, []);

  const gif = document.getElementById("gif");
  if (gif) {
    gif.setAttribute("src", image);
    counter = 0;
  }

  console.log("RENDERING COMPONENT");

  return (
    <div className="App">
      <h1>Giphy generator</h1>
      <h1 className="gifs-counter">
        <Label label={"Gifs generated: "} />
      </h1>
      <h1 className="gifs-container">
        <img style={{ width: "300px" }} id="gif" />
      </h1>
      <div
        id="gifs-button"
        onClick={(counter) => setCounter(counter + counter)}
      >
        New gifs
      </div>
    </div>
  );
}

export default App;

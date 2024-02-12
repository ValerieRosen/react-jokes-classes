import React from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

function App() {
  return (
    <div className="App">
      <h2 align="center"> Dad Joke Generator </h2>
      <h3 align="center"> Vote for your faves </h3>
      <JokeList />
    </div>
  );
}

export default App;

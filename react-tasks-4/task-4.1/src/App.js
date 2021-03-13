import "./App.css";
import Post from "./components/Post";
import React, { useState } from "react";

function App() {
  const [filterBolean, setFilterBolean] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

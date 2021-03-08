import "./App.css";
import data from "./data/data.json";
import Header from "./components/Header";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [filterBolean, setFilterBolean] = useState(false);
  return (
    <div className="App">
      <div className="container-fluid bg-light">
        <Header />
        <About />

        <div className="container">
          <div className="row justify-content-between">
            {data.map((item) => {
              return (
                <Card
                  name={item.name}
                  image={item.img}
                  desc={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

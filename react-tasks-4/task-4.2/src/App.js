import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import data from "./data/data.json";
import Header from "./components/Header";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";

import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-light">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={Error} />
        </Switch>
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

import "./App.css";
import Post from "./components/Post";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <Post />
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

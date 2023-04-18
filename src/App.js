import "./styles.css";
import Create from "./components/create";

export default function App() {
  return (
    <div className="App">
      <h1 className="main-header"> React Crud Operations</h1>

      <div>
        <Create />
      </div>
    </div>
  );
}

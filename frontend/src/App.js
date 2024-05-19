import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <Header title="Images Gallery"></Header>
      <Search />
    </div>
  );
}

export default App;

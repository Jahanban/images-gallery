import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Search from "./components/search";

const UNSPALSH_KEY = process.env.REACT_APP_UNSPALSH_KEY;
function App() {
  const [word, setWord] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  };
  // console.log(process.env.REACT_APP_UNSPALSH_KEY);
  return (
    <div className="App">
      <Header title="Images Gallery"></Header>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;

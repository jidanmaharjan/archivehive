import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Archive from "./modules/archive";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://archive.org/services/search/v1/scrape?fields=title&q=${search}&count=100`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.items?.slice(0, 10));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [search]);

  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} />
      <Archive data={data} />
    </div>
  );
}

export default App;

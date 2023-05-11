import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [year, setYear] = useState("");

  async function getGames() {
    try {
      let query = "";
      if (year) {
        query = `?year=${year}`;
      }
      const API = `http://localhost:8080/games${query}`;
      const res = await axios.get(API);
      setGames(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleYear(event) {
    setYear(event.target.value);
  }
  return (
    <div className="App">
      <h1>Games n Such</h1>
      <input onChange={handleYear} placeholder="Filter by Year" />
      <br />
      <br />
      <button onClick={getGames}>Get Games</button>
      {games.map((game) => {
        return (
          <p>
            {game.name} - {game.year}
          </p>
        );
      })}
    </div>
  );
}

export default App;

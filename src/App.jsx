import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyHero from "./components/MyHero";
import TodayWeather from "./components/TodayWeather";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-info bg-gradient">
      <div className="App-header ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MyHero />} />
            <Route path="/:city" element={<TodayWeather />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

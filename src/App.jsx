import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Ending from "./components/Ending";
import ResultPage from "./components/ResultPage";
import GetStarted from "./components/GetStarted";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winOrlose" element={<ResultPage />} />
        <Route path="/thanks" element={<Ending />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

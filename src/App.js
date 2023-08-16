import { Routes, Route } from "react-router-dom";
import { HomePage, IntroToJavascript } from "./exports";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/intro-to-javascript"
          element={<IntroToJavascript />}
        />
      </Routes>
    </div>
  );
}

export default App;

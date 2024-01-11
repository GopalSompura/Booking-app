import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Elements/Home/Home";
import List from "./Elements/List/List";
import Hotel from "./Elements/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Hotels" element={<List />}></Route>
        <Route path="/Hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

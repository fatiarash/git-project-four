import logo from "./logo.svg";
import "./App.css";
import MainPage from "./show-list/MainPage";
import SinglePost from "./show-list/single-post/SinglePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/singlepost/:slug" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

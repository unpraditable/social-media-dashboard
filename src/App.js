import logo from "./logo.svg";
import "./App.css";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />}></Route>
          <Route path="albums/:albumsId" element={<AlbumsPage />}></Route>
          <Route path="posts/:postsId" element={<PostsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

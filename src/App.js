import logo from "./logo.svg";
import "./App.css";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import PostsPage from "./pages/PostsPage";
import PhotosPage from "./pages/PhotosPage";
import CommentsPage from "./pages/CommentsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />}></Route>
          <Route path="albums/:userId" element={<AlbumsPage />}></Route>
          <Route path="posts/:userId" element={<PostsPage />}></Route>
          <Route path="photos/:albumId" element={<PhotosPage />}></Route>
          <Route path="comments/:postId" element={<CommentsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

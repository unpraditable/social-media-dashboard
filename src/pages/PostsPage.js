import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  let params = useParams();

  useEffect(() => {
    UserService.getPosts(params.postsId).then((item) => {
      setPosts(item);
    });
  }, []);
  return (
    <ul>
      {posts.length > 0 &&
        posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <a href={`/comments/${post.id}`}>View Comments</a>
          </li>
        ))}
    </ul>
  );
}

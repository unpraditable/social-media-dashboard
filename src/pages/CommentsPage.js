import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../services/PostService";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  let params = useParams();

  useEffect(() => {
    PostService.getComments(params.postId).then((item) => {
      setComments(item);
    });
  }, []);
  return (
    <ul>
      {comments.length > 0 &&
        comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </li>
        ))}
    </ul>
  );
}

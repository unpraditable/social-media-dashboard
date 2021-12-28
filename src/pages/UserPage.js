import { useEffect, useState } from "react";
import UserService from "../services/UserService";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserService.getUsers().then((item) => {
      setUsers(item);
    });
  }, []);
  return (
    <ul>
      {users.length > 0 &&
        users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <a href={`/albums/${user.id}`}>Albums</a>
            <a href={`/posts/${user.id}`}>Posts</a>
          </li>
        ))}
    </ul>
  );
}

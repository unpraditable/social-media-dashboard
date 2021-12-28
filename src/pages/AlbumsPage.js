import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  let params = useParams();

  useEffect(() => {
    UserService.getAlbums(params.userId).then((item) => {
      setAlbums(item);
    });
  }, []);
  return (
    <ul>
      {albums.length > 0 &&
        albums.map((album) => (
          <li key={album.id}>
            <h3>{album.title}</h3>
            <a href={`/photos/${album.id}`}>View Photos</a>
          </li>
        ))}
    </ul>
  );
}

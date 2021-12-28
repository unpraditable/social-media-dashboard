import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumService from "../services/AlbumService";

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  let params = useParams();

  useEffect(() => {
    AlbumService.getPhotos(params.albumsId).then((item) => {
      setPhotos(item);
    });
  }, []);
  return (
    <ul>
      {photos.length > 0 &&
        photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </li>
        ))}
    </ul>
  );
}

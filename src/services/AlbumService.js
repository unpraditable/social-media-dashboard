export default class AlbumService {
  static baseUrl = "https://jsonplaceholder.typicode.com/albums";
  static getPhotos(id) {
    return fetch(`${this.baseUrl}/${id}/photos`).then((response) =>
      response.json()
    );
  }
}

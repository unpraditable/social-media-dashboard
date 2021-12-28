export default class UserService {
  static baseUrl = "https://jsonplaceholder.typicode.com";
  static getUsers() {
    return fetch(`${this.baseUrl}/users`).then((response) => response.json());
  }

  static getAlbums(id) {
    return fetch(`${this.baseUrl}/users/${id}/albums`).then((response) =>
      response.json()
    );
  }

  static getPosts(id) {
    return fetch(`${this.baseUrl}/users/${id}/posts`).then((response) =>
      response.json()
    );
  }
}

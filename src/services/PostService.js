export default class PostService {
  static baseUrl = "https://jsonplaceholder.typicode.com/posts";
  static getComments(id) {
    return fetch(`${this.baseUrl}/${id}/comments`).then((response) =>
      response.json()
    );
  }
}

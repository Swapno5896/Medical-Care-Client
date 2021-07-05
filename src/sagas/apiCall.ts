export function getBlog() {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  }
  
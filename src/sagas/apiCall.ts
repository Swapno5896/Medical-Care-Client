export function getBlog() {
  return fetch("http://localhost:9000/getBlog")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

const url = 'https://salty-inlet-50152.herokuapp.com'
export function getBlog() {
  return fetch(url + "/getBlog")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

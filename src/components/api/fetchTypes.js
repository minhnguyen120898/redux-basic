function fetchTypes() {
    let URL = "http://localhost:3333/types";
  
    return fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  }
  
  export default fetchTypes;
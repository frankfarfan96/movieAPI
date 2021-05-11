export const movies = () => {
  const promiseFetch = fetch(
    "http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=cea54230"
  );

  console.log(promiseFetch);

  promiseFetch

    .then((ris) => {
      if (ris) return ris.json(); // in questo modo verifico che il risultato nn sia UNDEFINE or NULL
    })

    .then((arrjson) => {
      const arraymov = arrjson.Search;
      console.log(arraymov);

      const main = document.getElementById("main");
      arraymov.forEach((risfilm) => {
        const div = document.createElement("div");
        div.classList.add("item-movie");

        const image = document.createElement("img");
        image.setAttribute("src", risfilm.Poster);

        const text = document.createElement("p");
        text.innerHTML = `${risfilm.Title + '  |  ' + risfilm.Year}`;

        div.appendChild(image);
        div.appendChild(text);
        main.appendChild(div);
      });
    })

    .catch((err) => {
      console.error(err);
    });
};




  
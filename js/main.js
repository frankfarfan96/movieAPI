export const movies = () => {
  const promiseFetch = fetch(
    "https://www.omdbapi.com/?s=%27blade%20runner%27&apikey=cea54230"
  );

  promiseFetch

    .then((ris) => {
      if (ris) return ris.json(); // in questo modo verifico che il risultato nn sia UNDEFINE or NULL
    })

    .then((arrjson) => {
      const arraymov = arrjson.Search;
      arraymov.forEach(addfilm);
    })

    .catch((err) => {
      console.error(err);
    });
};

//Funzione per creare DIV dinamiche e inserirci i dati dell'API
const addfilm = (risfilm) => {

  const main = document.getElementById("main");
  
  const div = document.createElement("div");
  const image = document.createElement("img");
  const text = document.createElement("p");
  const text2 = document.createElement("p");
 
  div.classList.add("item-movie");
  image.setAttribute("src", risfilm.Poster);
  image.setAttribute("class","imgstyle");
  text.appendChild(document.createTextNode('Titolo : ' + risfilm.Title));
  text2.appendChild(document.createTextNode('Anno : ' + risfilm.Year));
  text.setAttribute("class","textstyle");
  text2.setAttribute("class","textstyle");
  if (risfilm.Poster != "N/A") { 
  div.appendChild(image);
  div.appendChild(text);
  div.appendChild(text2);
  main.appendChild(div);
  }
}



  

export const searchMovies = () => {
    const searchFetch = fetch("https://www.omdbapi.com/?s=%27"+ document.getElementById('inputMovie').value +"%27&apikey=6f612576");

    searchFetch
    .then((ris) => {
      if (ris) return ris.json();
    })
    .then((resultMovie) =>{
        removeSearch(); 
        const arraySearch = resultMovie.Search;
        arraySearch.forEach(addFilm);
      }

    )
    .catch(err => {
        console.error(err);
    })
}

const removeSearch = () => {
  document.getElementById("main").innerHTML="";
  // const cardMovies = document.getElementById("listMovies");
  // const image = document.getElementById("idImages");
  // const text = document.getElementById("titleMovies");
  // const text2 = document.getElementById("yearMovies");
  // cardMovies.removeChild(image);
  // cardMovies.removeChild(text);
  // cardMovies.removeChild(text2);
  // main.removeChild(cardMovies);
}

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
      arraymov.forEach(addFilm);
    })

    .catch((err) => {
      console.error(err);
    });
};

//Funzione per creare DIV dinamiche e inserirci i dati dell'API
const addFilm = (risfilm) => {

  const main = document.getElementById("main");
  
  const div = document.createElement("div");
  const image = document.createElement("img");
  const text = document.createElement("p");
  const text2 = document.createElement("p");
 
  div.classList.add("item-movie");
  div.setAttribute("id", "listMovies")
  image.setAttribute("src", risfilm.Poster);
  image.setAttribute("class","imgstyle");
  image.setAttribute("id", "idImages");
  text.appendChild(document.createTextNode('Titolo : ' + risfilm.Title));
  text2.appendChild(document.createTextNode('Anno : ' + risfilm.Year));
  text.setAttribute("class","textstyle");
  text.setAttribute("id", "titleMovies");
  text2.setAttribute("class","textstyle");
  text2.setAttribute("id", "yearMovies");
  if (risfilm.Poster != "N/A") { 
  div.appendChild(image);
  div.appendChild(text);
  div.appendChild(text2);
  main.appendChild(div);
  }
}



  

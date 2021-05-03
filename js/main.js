export const movies = () => {

    const promiseFetch = fetch('http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=cea54230');
    
    console.log(promiseFetch);
    
    promiseFetch
    
    .then(ris => {
      if (ris) return ris.json(); // in questo modo verifico che il risultato nn sia UNDEFINE or NULL
    })

    .then(arrjson => {
      const arraymov = arrjson.Search;
      console.log(arraymov);
      
      arraymov.forEach(risfilm => {
       
    
        const main = document.getElementById("main");
        const img1 = document.getElementById("main");
       
        const image = document.createElement("img");
        const text = document.createElement("h2");
        
        text.innerHTML = `${risfilm.Title}`;
      
        image.setAttribute('src', risfilm.Poster);
        img1.appendChild(image);
        main.appendChild(text);
     
     
        
        
       
     
   
      
      })
    })

    .catch(err => {
      console.error(err);
    })
  }






  
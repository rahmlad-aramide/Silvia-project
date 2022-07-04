const images = document.getElementsByClassName("gallery-image");
const overlayDesc = document.querySelector(".overlay-desc");
const overlayImage = document.getElementById("overlay-image");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById('close');
const overlayItem = document.getElementById("overlay-item");


Array.from(images).forEach((image) => {
  image.addEventListener("click", (e) => {
    overlay.style.display = "block";
    const imageSrc = e.target.src;
    overlayImage.src = imageSrc;
    // console.log(overlayImage.src);

    if (image.classList.contains("0")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head">
                Rumore
              </h1>
              <div class="mini-title">
                FelicitA’ ta’ta’, 1974
              </div>
              <p class="overlay-item-desc">
              Rumore, la storia di una donna, che ha lasciato il compagno/marito, perché “ho deciso che facevo da me”, ma una sera, sola in casa,
              sentendo un rumore, vorrebbe “tornare indietro con il tempo”, realizzando che “da sola non mi sento sicura, mai”. Un testo
              apparentemente in controtendenza, in anni di acceso femminismo.
              
              </p>
              `;
    }
    if (image.classList.contains("1")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head">
              Ballo, ballo
              </h1>
              <div class="mini-title">
              TOP HIT ITALY, 1982
              </div>
              <p class="overlay-item-desc">
              Ballo ballo/Dammi un bacio è il ventunesimo singolo della cantante italiana Raffaella Carrà, pubblicato nel 1982 dall'etichetta discografica Hispavox. Sigla iniziale della terza edizione del celebre varietà del sabato sera Fantastico, che vide il ritorno della showgirl in Italia dopo quattro anni di tour in giro per il mondo.
              </p>
              `;
    }
    if (image.classList.contains("2")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head">
  Fiesta
              </h1>
              <div class="mini-title">
              Fiesta, 1977
              </div>
              <p class="overlay-item-desc">
              Fiesta oltre ad essere il titolo di una famosa canzone dell’artista, è anche il titolo dell'ottavo album della cantante italiana Raffaella Carrà, pubblicato nel 1977 dall'etichetta discografica CGD.
              </p>
              `;
    }
    if (image.classList.contains("3")) {
      overlayDesc.innerHTML = `  <h1 class="overlay-head">
  Tanti auguri
              </h1>
              <div class="mini-title">
              raffaella, 1978
              </div>
              <p class="overlay-item-desc">
              Tanti auguri/Amoa è il diciasettesimo singolo della cantante pop Raffaella Carrà, pubblicato nel 1978 dall'etichetta discografica CBS. É un "evergreen" della musica italiana e del repertorio della cantante che viene riproposto ancora oggi.
È anche un inno della comunità LGBT. Il testo descrive i costumi di una donna libera e indipendente, esaltando il sesso in tutte le sue forme. Il ritornello è entrato poi nell'immaginario collettivo per lo slogan scanzonato ed ironico "come è bello far l'amore da Trieste in giù".
              </p>  `;
    }
    if (image.classList.contains("4")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head pr-4">
  A far l’amore
  incomincia tu
              </h1>
              <div class="mini-title">
              forte, forte, forte 1976
              </div>
              <p class="overlay-item-desc">
              É sicuramente il singolo di maggior successo della cantante, soprattutto fuori dall'ambito nazionale. Subito ristampato già durante il primo mese dalla pubblicazione, visto l'enorme riscontro in Europa e oltre oceano.
              Con oltre 20 milioni di copie, grazie al pezzo A far l'amore comincia tu, è diventato il 45 giri più venduto e conosciuto della soubrette nel mondo. Nel testo di Daniele Pace una donna spregiudicata, chiede al suo uomo di prendere l'iniziativa nel sesso, riconfermando l'icona erotica di Raffaella nell'immaginario degli italiani. 
              </p>
              `;
    }
    if (image.classList.contains("5")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head">
  Forte,forte,forte
              </h1>
              <div class="mini-title">
              FORTE,FORTE,FORTE 1976
              </div>
              <p class="overlay-item-desc">
              Fu usata come sigla di raccordo nella 36ª edizione della trasmissione radiofonica Gran varietà, in cui Raffaella era la conduttrice insieme a Paolo Villaggio. Ma anche come sigla iniziale del programma televisivo Adesso musica del 1976. Il testo, scritto da Cristiano Malgioglio, racconta di una donna e del suo rapporto vagamente sadomasochistico con il suo uomo.
              </p>
              `;
    }
    if (image.classList.contains("6")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head">
  Ma che musica 

  maestro
              </h1>
              <div class="mini-title">
              Ma che musica 

              maestro 1970
              </div>
              <p class="overlay-item-desc">
              Ma che musica maestro/Non ti mettere con Bill è il singolo di debutto di Raffaella Carrà, pubblicato e distribuito dalla RCA Italiana nel 1970. Sigla iniziale del programma Canzonissima 1970, presentato insieme a Corrado dalla stessa Raffaella, che propose al pubblico televisivo l'emergente soubrette anche in veste di ballerina (della sigla curò la coreografia), cantante e conduttrice. La sigla fece scandalo per l'ombelico scoperto mostrato per la prima volta in una trasmissione televisiva nazionale.
              </p>
              `;
    }

    if (image.classList.contains("7")) {
      overlayDesc.innerHTML = `
  <h1 class="overlay-head">
 Pedro
              </h1>
              <div class="mini-title">
              mi spendo tutto, 1980
              </div>
              <p class="overlay-item-desc">
              Pedro/Maria Marì diciannovesimo singolo della cantante Raffaella Carrà, pubblicato nel 1980. Il testo, piuttosto ironico, descrive l'avventura di una turista in vacanza a Santa Fe, con un "ragazzino" di nome Pedro, il quale in un primo momento si offre come guida turistica e successivamente diventa il suo amante.               </p>
              `;
    }
  });
});

document.addEventListener("click", function (e) {
  if (e.target === overlay || e.target === closeBtn) {
    overlay.style.display = "none";
  }
});
// overlayItem.addEventListener('mouseleave', function () {
//  if(overlay.style.display = "block"){
//    overlay.style.display = 'none';
//   }
// })
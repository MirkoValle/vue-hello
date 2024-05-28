// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// Bonus 2:
// Aggiungiamo la possibilita' di modificare in tempo reale con un input sia l'h1 che l'url dell'immagine!
// Bonus Special:
// Al click sull'immagine facciamo succedere qualcosa di creativo!


// SCOMPOSIZIONE:

// Importo vue e lo inserisco nel body
// inserisco un h1 con vue



const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: "ciao",
            franco: "https://i.kym-cdn.com/entries/icons/facebook/000/042/690/Screen_Shot_2022-11-16_at_2.24.03_PM.jpg"
        }
    },
    methods: {

    }
}).mount("#app");
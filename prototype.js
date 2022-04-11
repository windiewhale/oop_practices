// --- object constructor: ---

function Poem({yearFromNet, authorFromNet, titleFromNet, textFromNet}) {
    this.year = yearFromNet;
    this.author = authorFromNet;
    this.title = titleFromNet;
    this.text = textFromNet;

    this.makePage = function () {
        console.log(`
         Title: ${this.title}
         
         ${this.text}
         Author: ${this.author}
         Year: ${this.year}
        `);
    }
}

const fakeNetData = {
    yearFromNet: 1962, 
    authorFromNet: "Weöres Sándor",
    titleFromNet: "Énhasadás",
    textFromNet:    `Utca sarkon várok rám 
    Fél órája is van tán 
    Ám értelmem fölragyog 
    Nem jövök mert itt vagyok`
}

Poem.prototype.lang = "hungarian"
const favoritePoemOfAndras = new Poem(fakeNetData)
/* favoritePoemOfAndras.favBy = "András Ránki" */

/* console.log(favoritePoemOfAndras); */

/* console.log(favoritePoemOfAndras.lang); */
/* console.log(favoritePoemOfAndras.__proto__);
console.log(Poem.prototype);
 */
/* console.log(favoritePoemOfAndras.favBy); */

//console.log(Poem);

favoritePoemOfAndras.makePage()
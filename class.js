class PoemData {
    constructor(year, author, title, text, favBy) {
        this.year = year
        this.author = author
        this.title = title
        this.text = text
        this.favBy = favBy
    }

    makePage(){
        console.log(`
        Title: ${this.title}
        
        ${this.text}
        Author: ${this.author}
        Year: ${this.year}
       `)
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

const newFav = new PoemData(fakeNetData.yearFromNet, fakeNetData.authorFromNet, fakeNetData.titleFromNet, fakeNetData.textFromNet, "Andrew")

const favPoemOfAndrew = new PoemData(1962, "Weöres Sándor", "Énhasadás", `Utca sarkon várok rám 
Fél órája is van tán 
Ám értelmem fölragyog 
Nem jövök mert itt vagyok`, "András Ránki" )

const favPoemOfGob = new PoemData(1850, "Vörösmarty Mihály", "Előszó", `Midőn ezt írtam, tiszta volt az ég.
Zöld ág virított a föld ormain.
Munkában élt az ember mint a hangya:
Küzdött a kéz, a szellem működött,
Lángolt a gondos ész, a szív remélt,
S a béke izzadt homlokát törölvén
Meghozni készült a legszebb jutalmat,
Az emberüdvöt, melyért fáradott.
Ünnepre fordúlt a természet, ami
Szép és jeles volt benne, megjelent.
 
Öröm - s reménytől reszketett a lég,
Megszülni vágyván a szent szózatot,
Mely által a világot mint egy új, egy
Dicsőbb teremtés hangján üdvözölje.
Hallottuk a szót. Mélység és magasság
Viszhangozák azt. S a nagy egyetem
Megszünt forogni egy pillantatig.
Mély csend lön, mint szokott a vész előtt.
A vész kitört. Vérfagylaló keze
Emberfejekkel lapdázott az égre,
Emberszivekben dúltak lábai.
Lélekzetétől meghervadt az élet,
A szellemek világa kialutt,
S az elsötétült égnek arcain
Vad fénnyel a villámok rajzolák le
Az ellenséges istenek haragját.
És folyton-folyvást ordított a vész,
Mint egy veszetté bőszült szörnyeteg.
Amerre járt, irtóztató nyomában
Szétszaggatott népeknek átkai
Sohajtanak fel csonthalmok közől;
És a nyomor gyámoltalan fejét
Elhamvadt várasokra fekteti.
Most tél van és csend és hó és halál.
A föld megőszült;
Nem hajszálanként, mint a boldog ember,
Egyszerre őszült az meg, mint az isten,
Ki megteremtvén a világot, embert,
E félig istent, félig állatot,
Elborzadott a zordon mű felett
És bánatában ősz lett és öreg.
 
Majd eljön a hajfodrász, a tavasz,
S az agg föld tán vendéghajat veszen,
Virágok bársonyába öltözik.
Üvegszemén a fagy fölengedend,
S illattal elkendőzött arcain
Jókedvet és ifjuságot hazud:
Kérdjétek akkor ezt a vén kacért,
Hová tevé boldogtalan fiait?`, "gobias")

//console.log(favPoemOfGob);
//console.log(newFav);

favPoemOfGob.makePage()

class ForeignPoem extends PoemData{
    constructor (year, author, title, text, favBy, translator) {
        super(year, author, title, text, favBy)
        this.translator = translator
    }

    makePage(){
        console.log(`
        Title: ${this.title}
        
        ${this.text}
        Author: ${this.author}
        Translator: ${this.translator}
        ${this.year}
       `)
    }
}

const weoresPoem2 = new ForeignPoem(1962, "Weöres Sándor", "Énhasadás", `Utca sarkon várok rám 
Fél órája is van tán 
Ám értelmem fölragyog 
Nem jövök mert itt vagyok`, "András Ránki", "Alan Dickson")

weoresPoem2.makePage()
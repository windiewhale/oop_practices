const fakeNetData = {
    yearFromNet: 1962, 
    authorFromNet: "Weöres Sándor",
    titleFromNet: "Énhasadás",
    textFromNet:    `Utca sarkon várok rám 
    Fél órája is van tán 
    Ám értelmem fölragyog 
    Nem jövök mert itt vagyok`
}

/* console.log(fakeNetData.yearFromNet); */

const fndafn = fakeNetData.authorFromNet
const fndyfn = fakeNetData.yearFromNet

/* console.log(fndafn); */

/* const{yearFromNet, authorFromNet} = fakeNetData

console.log(yearFromNet);
console.log(authorFromNet); */

function funWithPoemData({yearFromNet, authorFromNet}) {
    console.log(yearFromNet);
    console.log(authorFromNet); 
}

/* funWithPoemData(fakeNetData) */


// --- array destructuring: ---

const arr = ["uno", "dos", "tres", function () {
    console.log("ciao");
},"cuatro"]

const firItem = arr[0]
const secItem = arr[1]

const [firstItem, secondItem, ...elseX] = arr // 3. gets all the rest elements in array

/* console.log(elseX); */

const [,,, ourFun] = arr

ourFun()
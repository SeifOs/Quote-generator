var randomNumber;
var usedNum = [];
var quote = document.getElementById("quote");
var quoteSection = document.getElementById("quoteSection");
var quoteImg = document.getElementById("quoteImg");
var images = [
  "img/img1.png",
  "img/img2.png",
  "img/img3.png",
  "img/img4.png",
  "img/img5.png",
];
var quoteList = [
  `<p class="fs-2">“Be yourself; everyone else is already taken.”</p>
    <p class="fs-6"> ― Oscar Wilde</p>`,
  `<p class="fs-2">“So many books, so little time.” </p>
    <p class="fs-6"> ― Frank Zappa </p>`,
  `<p class="fs-2">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” </p>
    <p class="fs-6"> ― Albert Einstein </p>`,
  `<p class="fs-2">“If you tell the truth, you don't have to remember anything.” </p>
    <p class="fs-6"> ― Mark Twain </p>`,
  `<p class="fs-2">“To live is the rarest thing in the world. Most people exist, that is all.” </p>
    <p class="fs-6"> ― Oscar Wilde</p>`,
];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function chooseQuote(){
    if(usedNum.length == quoteList.length) usedNum = [];

    randomNumber = randomNum(0, quoteList.length);

    if (!usedNum.includes(randomNumber)){
        usedNum.push(randomNumber)
        return randomNumber;
    }
    else{ return chooseQuote(); }
}

function showQuote() {
  quoteSection.classList.remove("d-none");
  quoteImg.src = images[randomNum(0, images.length)];
  quote.innerHTML = quoteList[chooseQuote()]
}

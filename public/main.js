// User cashes in
  //user types start money in input tag
  //user money is displayed to dom
    //let totalCash = document.querySelectorAll(".cash").value

//User can place bet
  //user types bet amount into input
  //let bet = document.querySelectorAll(".bet").value
  //totalCash - bet = totalCash

//Once user bets the first 2 cards are dealt
//User has the choice to hit or stay
  //function called to check if they lost/won
    //user stays
      //dealer plays until they hit 21 or bust
      //use number range to determine whether dealer will hit or stand
    //else (user hits)
      //another card is  dealt to the user
  //if user score's greater than 21 dealer wins
  //if dealer's score's greater than 21 user wins

let totalCash = document.querySelectorAll(".cash").value
let bet = document.querySelectorAll(".bet").value
let casino = "" //REVISIT WITH DB VALUE

let player = {
  value : 0
}
let dealer = {
  value : 0
}
let playerHand = player.value
let dealerHand = dealer.value
let playerDif = 21 - playerHand
let dealerDif = 21 - dealerHand

console.log(player.value)

function compareHands(){
  if(playerDif > dealerDif){
    console.log("Dealer Wins")
    casino = casino + bet
  }else{
    console.log("Player Wins")
    totalCash = totalCash + (2 * bet)
  }
}

function hit(){
  //append cards
  drawCard()
}

let suits = [ "hearts", "diams", "clubs", "spades" ];
let ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];

let deck = [];



let drawButton = document.querySelector("#drawbtn");
drawButton.addEventListener("mousedown", event => {
  console.log("clickecddd")
  makeDeck();
  var myCard = drawCard();
  if( myCard ) {
    makeCard( myCard.suit, myCard.rank );
  } else {
    alert("no more cards in the deck");
  }
})

// function init() {
//   makeDeck();
//   $("#drawbtn").click( function() {
//     alert("fuck")
//     let myCard = drawCard();
//     if( myCard ) {
//       makeCard( myCard.suit, myCard.rank );
//     } else {
//       alert("no more cards in the deck");
//     }
//   });
// }

function makeDeck() {
  deck = [];
  //for each type of suit
  for(let i = 0; i < suits.length; i++) {
    //and for each rank
    for(let j = 0; j < ranks.length; j++) {
      //make a card
      let card = {};
      card.suit = suits[i];
      card.rank = ranks[j];
      deck.push(card);
    }
  }
  console.log("MADE A NEW DECK OF ", deck.length, " CARDS");
}

function drawCard() {
  let card;
  if(deck.length > 0) {
    let randIndex = Math.floor( Math.random() * deck.length );
    card = deck.splice(randIndex, 1)[0];
  }
  return card;
}

function makeCard(suit, rank) {
  let card = $(".card.template").clone();
  card.removeClass("template");
  card.find(".rank").html(rank);
  card.find(".suit").html("&"+suit+";");

  if(suit === "hearts" || suit === "diams") {
    card.addClass("red");
  }
  $(".playerCards").append(card);

  console.log(rank)
  player.value = rank
  console.log(player.value);

}





















// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// var trash = document.getElementsByClassName("fa-trash");
//
// Array.from(thumbUp).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp':thumbUp
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });
//
// Array.from(thumbDown).forEach(function(element) {
  // element.addEventListener('click', function(){
  //   const name = this.parentNode.parentNode.childNodes[1].innerText
  //   const msg = this.parentNode.parentNode.childNodes[3].innerText
  //   const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
  //   fetch('messagesDown', {
  //     method: 'put',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       'name': name,
  //       'msg': msg,
  //       'thumbDown':thumbDown
  //     })
  //   })
  //   .then(response => {
  //     if (response.ok) return response.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //     window.location.reload(true)
  //   })
  // });
// });
//
// Array.from(trash).forEach(function(element) {
  // element.addEventListener('click', function(){
  //   const name = this.parentNode.parentNode.childNodes[1].innerText
  //   const msg = this.parentNode.parentNode.childNodes[3].innerText
  //   fetch('messages', {
  //     method: 'delete',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'name': name,
  //       'msg': msg
  //     })
  //   }).then(function (response) {
  //     window.location.reload()
  //   })
  // });
// });

function EvaluateFunction(){
    var player1card1 = document.getElementById("player1card1").value;
    var player1card2 = document.getElementById("player1card2").value;
    var player1card3 = document.getElementById("player1card3").value;
    var player1card4 = document.getElementById("player1card4").value;
    var player1card5 = document.getElementById("player1card5").value;
    var player2card1 = document.getElementById("player2card1").value;
    var player2card2 = document.getElementById("player2card2").value;
    var player2card3 = document.getElementById("player2card3").value;
    var player2card4 = document.getElementById("player2card4").value;
    var player2card5 = document.getElementById("player2card5").value;
    var player1cards =[player1card1, player1card2, player1card3, player1card4, player1card5 ]
    var player2cards = [ player2card1, player2card2, player2card3, player2card4, player2card5]
    
    // evalutate HighCard
    // sort player 1 cards
    player1cards.sort(function(a, b) {
        return a.slice(0, -1) - b.slice(0, -1);
    });
    
    // sort player 2 cards
    player2cards.sort(function(a, b) {
        return a.slice(0, -1) - b.slice(0, -1);
    });
    
    for (let i = 4; i > 0; i--){
        if (player1cards[i].slice(0, -1) > player2cards[i].slice(0, -1)){
            console.log("Player1 wins throught high card." + player1cards[i] + " " player2cards[i]); 
        } else if (player2cards[i].slice(0, -1) > player1cards[i].slice(0, -1)){
            console.log("Player2 wins throught high card.");
        } else {
            console.log("It is a draw.");
        }
    }
    
    document.getElementById("EvaluateResult").innerHTML = player1cards + player2cards;
}


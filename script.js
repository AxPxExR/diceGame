//var randomNumber1 = Math.floor(Math.random()* 6 ) + 1; //generate random 1 - 6

//var randomDiceImage = "imagedice" + randomNumber1 + ".png";// dice1.png - dice2.png

//var randomImageSource= "images/" + randomDiceImage; 

//var image1 = document.querySelectorAll(".img1")[0].image1.setAttribute("src", randomImageSource);

//Array Method
var arrayOfImages = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];

function dice(){
    var randomNumber1 = Math.floor(Math.random() * arrayOfImages.length);
    var x = document.querySelector('.img1').src= arrayOfImages[randomNumber1];

    var randomNumber2 = Math.floor(Math.random() * arrayOfImages.length);
    var y = document.querySelector('.img2').src = arrayOfImages[randomNumber2];

    if(x > y){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }else if(x < y){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }else if (x === y ){
        document.querySelector("h1").innerHTML = "Draw";
    }
};

dice();
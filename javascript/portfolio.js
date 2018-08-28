var path = "assets/images/";

function Project(name, tech , description, imgName , webUrl, gitHub){
    this.name = name;
    this.tech = tech;
    this.description = description;
    this.img = path + imgName;
    this.webUrl = webUrl;
    this.gitHub = gitHub;
    this.cardSide = "front";
    this.card = $('<div class = "projBox">');


    this.displayCard = function (){
            
            this.card.append('<div id="card">'+
                                '<div class="front">'+
                                    '<h5 class="card-title">' + this.name + '</h5>' +
                                        '<div class = "row"> <div class="col-md-12 card"><img class="img-fluid " alt='+this.name + ' src='+this.img + '></div></div>'+
                                '</div>' +
                                '<div class="back">' +
                                    '<div class = "row"> <div class="col-md-12 "><p class="lead">' + this.description + '</p></div>' +
                                    '</div>' + 
                                    '<div class = "row"> <div class="col-md-6 lnk">' +
                                        '<a href=" '+ this.gitHub +  ' "target = "_blank" "><img class="img-fluid icon-github" src="assets/images/github2.png">   </a> '+ 
                                        '</div>' +
                                        '<div class="col-md-6 lnk">' +
                                        '<a href=" '+ this.webUrl +  ' " target = "_blank" "><img class="img-fluid icon-web" src="assets/images/web.png">   </a> '+ 
                                        '</div>' +
                                    '</div>' +
                                    
                            '</div>');

                                
$('#portfolio-id').append(this.card);
        
        // var tmpDiv;
            
        //     this.card.addClass('front')
        //     this.card.append('<h5 class="card-title">' + this.name + '</h5>');
            
        //     // if (this.cardSide === "front") {
        //         tmpDiv = $('<div class = "row"> <div class="col-md-12 card"><img class="img-fluid " alt='+this.name + ' src='+this.img + '></div></div>');                   
        //     } else {                
        //         tmpDiv = $( '<div class = "row"> <div class="col-md-12 card"><p class="lead">' + this.description + '</p><a href="#" class="icon">' + this.webUrl + '</a></div></div>');
        //         // this.card.append('<a href="#" class="icon">' + this.webUrl + '</a>');
        //     }
        //     this.card.append(tmpDiv);
        //     $('#portfolio-id').append(this.card);
    };

};

var proj1 = new Project ("Basic Portfolio" , ["html5","css3", "Bootstrap", "Responsiveness"], "the very first project", "IMG_1659.JPG", "https://nasibnia.github.io/Bootstrap-Portfolio/" , "https://github.com/NasibNia/Bootstrap-Portfolio");
var proj2 = new Project ("Psychic Game Land", ["html5","css3", "Bootstrap", "javascript" , "jQuery"], "very first steps into javascript","IMG_1663.JPG", "https://nasibnia.github.io/Psychic-game/.", "https://github.com/NasibNia/Psychic-game");
var proj3 = new Project ("Super Hero Battle Land",["html5","css3", "Bootstrap", "javascript" , "jQuery"] , "learning more about javascript & jQuary", "IMG_1662.JPG", "https://nasibnia.github.io/SuperHeros/.", "https://github.com/NasibNia/SuperHeros");
var proj4 = new Project ("Crystal Game Land",["html5","css3", "Bootstrap", "javascript" , "jQuery"],"learning more about javascript & jQuary", "crystal.jpeg", "https://nasibnia.github.io/CrystalGame/.", "https://github.com/NasibNia/CrystalGame");
var proj5 = new Project ("Emothional Gify Land",["html5","css3", "Bootstrap", "javascript" , "jQuery" ,"API"] , "Getting to work with APIs" , "image2.gif","https://nasibnia.github.io/GifTastic/.","https://github.com/NasibNia/GifTastic");
var proj6 = new Project ("Trivia Game Land",["html5","css3", "Bootstrap", "javascript" , "jQuery" ], "Setting Time Intervals", "animal.jpg","https://nasibnia.github.io/TriviaGame/.","https://github.com/NasibNia/TriviaGame");
var proj7 = new Project ("Train Shceduler",["html5","css3", "Bootstrap", "javascript" , "jQuery" ,"API", "firebase", "moment.js"], "Getting to know firebase and moment.js" ,"wagon.jpg", "https://nasibnia.github.io/trainActivity/.","https://github.com/NasibNia/trainActivity");
// var proj8 = new Project ("Rock Paper Scissor");
var proj9 = new Project ("Lyri Quiz",["html5","css3", "Bootstrap", "javascript" , "jQuery" ,"API", "firebase", "moment.js", "buble.js", "alphabet.js", "UIKit"], "An interactive realtime game", "win.jpg", "https://jsutliff.github.io/LyriQuiz/","https://github.com/NasibNia/LyriQuiz");
var proj10= new Project ("Liri Node App",["javascript" ,"node.js","API", "fs","inquirer","moment.js"],"Gettig to know Node.js", "bot.jpg","","https://github.com/NasibNia/Liri-Node-App");


var projArr = [proj1,proj2,proj3,proj4,proj5,proj6,proj7,proj9,proj10];

function makeCards(){
    for(var i = 0; i < projArr.length ; i++){        
        var currentProj = projArr[i];
        currentProj.displayCard();

    }
}



$(document).ready(function () {

    $(document).on('click', '#portfolio', function(){
        $('#home').hide();
        $('#about').hide();
        makeCards();
    });

    $(document).on('click', '#about-me', function(){
        $('#home').hide();
        $('#portfolio').hide();
        
    });







});



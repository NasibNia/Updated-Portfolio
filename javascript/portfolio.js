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
            var tmpDiv;
            this.card.addClass('card');
            this.card.addClass(this.cardSide);
            this.card.append('<h5 class="card-title">' + this.name + '</h5>');
            if (this.cardSide === "front") {
                tmpDiv = $('<div class = "row"> <div class="col-md-12 card"><img class="img-fluid " alt='+this.name + ' src='+this.img + '></div></div>');                   
            } else {                
                tmpDiv = $( '<div class = "row"> <div class="col-md-12 card"><p class="lead">' + this.description + '</p><a href="#" class="icon">' + this.webUrl + '</a></div></div>');
                // this.card.append('<a href="#" class="icon">' + this.webUrl + '</a>');
            }
            this.card.append(tmpDiv);
            $('#portfolio-id').append(this.card);
    };

};

var proj1 = new Project ("Basic Portfolio" , ["html5","css3", "Bootstrap", "Responsiveness"], "the very first project", "IMG_1659.JPG", "https://nasibnia.github.io/Bootstrap-Portfolio/" , "https://github.com/NasibNia/Bootstrap-Portfolio");
var proj2 = new Project ("Psychic Game Land");
var proj3 = new Project ("Super Hero Battle Land");
var proj4 = new Project ("Crystal Game Land");
var proj5 = new Project ("Emothional Gify Land");
var proj6 = new Project ("Trivia Game Land");
var proj7 = new Project ("Train Shceduler");
var proj8 = new Project ("Rock Paper Scissor");
var proj9 = new Project ("Lyri Quiz");
var proj10= new Project ("Liri Node App");


var projArr = [proj1,proj2,proj3,proj4,proj5,proj6,proj7,proj8,proj9,proj10];

function makeCards(){
    for(var i = 0; i < projArr.length ; i++){        
        var currentProj = projArr[i];
        currentProj.displayCard();

    }
}

$(document).ready(function () {

    $(document).on('click', '#portfolio', function(){
        $('#home').hide();
        makeCards();
    });

    $(document).on('mouseover', '.card',function() {
        console.log('hovering');
        $(this).toggleClass('fron').toggleClass('back');
        console.log(this);
    });



});



var path = "assets/images/";

function Project(name, tech , description, imgName , webUrl, gitHub){
    this.name = name;
    this.tech = tech;
    this.description = description;
    this.img = path + imgName;
    this.webUrl = webUrl;
    this.gitHub = gitHub;
    this.cardSide = "front";

    this.displayCard = function (){
        if(this.cardSide === "front"){
            //show name,img
        } else {
            // show tech, description, webUrl, gitHub,
        }
        
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
        var projDiv = $('<div class = "card projBox">');
        projDiv.append('<h5 class="card-title">' + currentProj.name + '</h5>');
        var tmpDiv = $('<div class = "row"> <div class="col-md-12 card"><img class="img-fluid " alt='+currentProj.name + ' src='+currentProj.img + '></div></div>');
        projDiv.append(tmpDiv);
        projDiv.append('<a href="#" class="icon">' + currentProj.webUrl + '</a>');
        $('#portfolio-id').append(projDiv);
    }
}




$(document).ready(function () {

    $(document).on('click', '#portfolio', function(){
        $('#home').hide();
        makeCards();

    });








});
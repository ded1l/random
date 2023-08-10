
var ideas=[
    "A flights app",
    "soical media app",
    "A to-do list app",
    "tinder",
    "A news app",
    "A dating app",
    "A music app",
    "A food delivery app",
    "A fitness app",
    "A game",
    "A project planner",
    "A messaging app",
    "a recipes app",
    " quiz app",
    "job search app",
    "course search app",
    "e-commerce app"


]; 

var ideasforwho=[
    "lawyers",
    "doctors",
    "geeks",
    "students",
    "artists",
    "people who like to cook",
    "gymnasts",
    "people who like to dance",
    "singers",
    "soical workers",
   "travelers and people who like to exploer",
   "couples",   
   "needy people",
   "getting movie recommendations",
   "shopping",
   "gamers",
   "writers",
   "athletes",
   "job seekers",
   "video editors",
    "photographers",
    "influencers",
    "entrepreneurs",
    
   "retired people"
];


var randomidea=Math.floor(Math.random()*ideas.length);
var randfor=Math.floor(Math.random()*ideasforwho.length);
var idea=ideas[randomidea];
var people=ideasforwho[randfor];
document.write ("<h1> A idea for an app is: "+idea+" for "+people+"</h1>");



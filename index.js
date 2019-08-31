//scope

// Root Scope (window)

/*var fun = 5;

function funFunction() {
    //child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerFunction() {
    var fun = "Bye";
    console.log(2, fun);
}

function funestFunction() {
    fun = "Ahhh";
    console.log(3, fun);
}

console.log("window", fun); */

function isUserValid(bool) {
    return bool;
}

var ansswer = isUserValid(true) ? "You may enter" : "Acces Denied";
var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "not available");

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "Your encouter a monstar";
            break;
        case "back":
            whatHappens = "Your arrived home";
            break;
        case "left":
            whatHappens = "Your run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

var list = ["car", "Moterbig", "bysycle", "robatic", "Track"];

var user = {
    name: "Mohib",
    lastName: "Arsala",
    age: "33",
    hobby: "coding",
    isMarried: "false",
    shout: function() {
        console.log("fire on hime!!");
    }
};

var list = [
    {
        userName: "Mohib",
        password: "lllm"
    },

    {
        userName: "Arsala",
        password: "mmml",
        action: "stright"
    }
]
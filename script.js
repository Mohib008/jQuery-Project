/scope

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

var name = "Mohib";
if(name === "Mohib") {
    console.log("Hi Mohib");
} else if (name === "Arsala") {
    console.log("Hi Arsala");
} else {
    console.log("Hummm i dont know you!");
}

console.log("hello", "this is my webside", "are this your");


function sayHello() {
    console.log("Hello");
}
sayHello();
var sayBye = function() {
    console.log("Bye");
}
sayBye();



function sing(songs) {
    console.log(songs);
}

sing("lalalalalal");
sing("heheheheheheheh");
sing("daratatjoeteoteoit");

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a*b;
    }
}

multiply(5,10);

var list = ["car", "track", "MoterBig", "Cycle", "Airplane"];
console.log(list[0][4]);

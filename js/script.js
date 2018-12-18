var eventType = prompt("Please enter the Event Type (casual, semi-formal, formal):");

var tempFahr = prompt("Please enter the temperature in degrees Fahrenheit:");

if (eventType === "casual" && tempFahr < 54) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a coat.";
} else if (eventType === "casual" && tempFahr > 53 && tempFahr < 71) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a jacket.";
} else if (eventType === "casual" && tempFahr > 70) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and no jacket.";
} else if (eventType === "semi-formal" && tempFahr < 54) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a coat.";
} else if (eventType === "semi-formal" && tempFahr > 53 && tempFahr < 71) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a jacket.";
} else if (eventType === "semi-formal" && tempFahr >70) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and no jacket.";
} else if (eventType === "formal" && tempFahr < 54) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a coat.";
} else if (eventType === "formal" && tempFahr > 53 && tempFahr < 71) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a jacket.";
} else if  (eventType === "formal" && tempFahr > 70) {
    var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and no jacket.";
} else {
    var result = "Looks like you didn't enter the expected parameters. Click the refresh button and try again.";
};

console.log(result);

document.write("<h2>" + result + "</h2>");
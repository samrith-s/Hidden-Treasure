$(function() {
    $("#countDown").countdowntimer({
        seconds: 120,
        size: "lg",
        tickInterval: 1
    });

function timeisUp(){
    //Code to be executed when timer expires.
}
});

function ticking() {
    console.log("Seconds changed!");
}
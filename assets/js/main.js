$(function(){
    $("#more_options").countdowntimer({
        minutes : 20,
                size : "lg",
                tickInterval : 5,
                timeSeparator : ":",
                timeUp : timeisUp()
});

function timeIsUp() {
    //Code to be executed when timer expires.
}
});
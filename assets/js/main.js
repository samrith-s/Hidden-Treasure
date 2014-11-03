
var objectHash;
var find = [];
var clicked;


function initTheme() {

}

function createFindList() {
    for(var i = 0; i < 10; i++) {
        find.push(objectHash[i]);
    }
}

function initPage() {

}

function initGame() {
    clicked = false;

    $("#countdown").countdowntimer({
        minutes: 2,
        tickInterval: 1,
        size: "lg",
        timeSeparator: ":",
        timeUp: endGame()
    });
}

function getClick() {
    $(".true").on('click', function() {
        if(clicked == false)
            processClick($(this).attr("id"));
    });
}

function processClick(id) {

}

function showSplash(msg, delay, callback) {
    switch(delay.toString()) {
        case "0":
            msg += msg += " <br /> <br /> <input value='Play Again' type='button' onclick='initTheme()' /> ";
            $('#splasher').html(msg).fadeIn(500);
            break;

        default:
            $('#splasher').html(msg).fadeIn(500).delay(delay).fadeOut(500);
            setTimeout(function() {
                if(typeof callback === "function") {
                    callback();
                }
            }, 3000);
    }
}

function victory() {
    var msg = "Congratulations! <br /> You found all the Hidden Objects! <br /> <br/> Click 'Play Again' to Restart the Game"
    showSplash(msg, 0);
}

function endGame() {
    var msg = "Uh Oh! <br /> Time's Up! <br /> <br/> Click 'Play Again' to Restart the Game"
    showSplash(msg, 0);
}


var objectHash;
var find = [];
var clicked;


function initTheme() {
   document.body.style.backgroundImage = "";

    objectHash = shuffle(objects);
    for(var i = 0; i < objectHash.length; i++) {
        objectHash[i].id = i+1;
        objectHash[i].click="false";
        objectHash[i].img = "<img src='assets/img/objects/" + objectHash[i].name + ".png' class='false' id='" + objectHash[i].name
            + "' />";
    }
}

function createFindList() {

    for(var i = 0; i < 10; i++) {
        find.push(objectHash[i]);
        find[i].img = "<img src='assets/img/objects/" + find[i].name + ".png' class='true' id='" + find[i].name
            + "' />";
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


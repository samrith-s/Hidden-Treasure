
var objectHash = [];
var find = [];
var clicked;
var gameType;


$(function() {
    setInterval(function() {
        $("#hud").css("height", window.innerHeight*0.15);
        $("#room").css("height", window.innerHeight*0.85);
    }, 100);
});

function initTheme() {
    document.body.style.backgroundImage = "";
    objectHash = shuffle(objects);
    for(var i = 0; i < objectHash.length; i++) {
        objectHash[i].id = i+1;

        objectHash[i].silhouette = "<img src='assets/img/objects/silhouettes/" + objectHash[i].name + ".png' class='img-scale' " +
            "id='" + objectHash[i].id + "' />";

        objectHash[i].img = "<img src='assets/img/objects/opaque/" + objectHash[i].name + ".png' class='img-scale' id='" +
            objectHash[i].name + (i+1) + "' onclick='processClick(" + objectHash[i].id + ")' />";

    }

    initGame();

}

function createFindList() {
    for(var i = 0; i < 10; i++) {
        find.push(objectHash[i]);

    }
}

function initPage() {
    for(var i = 0; i < find.length; i++)
        $("#"+find[i].parent).append(find[i].img);

    for(var i = 10; i < objectHash.length; i++)
        $("#"+objectHash[i].parent).append(objectHash[i].img);

    for(var i=0; i<find.length; i++)
    {
        $("#room").append(find[i].img);

        $("#" + find[i].name + (i+1)).css({
            "position": "absolute",
            "top": find[i].top,
            "left": find[i].left
        });
        if(i<5)
            $("#first-col").append(find[i].silhouette);
        else
            $("#third-col").append(find[i].silhouette);
    }

}

function initGame() {

    $("#countdown").countdowntimer({
        seconds: 120,
        tickInterval: 1,
        size: "lg",
        timeUp: endGame()
    });

    createFindList();
    initPage();

}

function getClick() {
    $(".true").on('click', function() {
        if(clicked == false)
            processClick($(this).attr("id"));
    });
}

function processClick(id) {
    var getItem;

    for(i=0; i<find.length; i++)
    if(id==find[i].id)
        getItem = find[i];

    var pos = $("#" + getItem.id).position();

    $("#" + getItem.name + id).animate({"top": pos.top, "left": pos.left}, function(){
        $(this).delay().hide();
    });


    $("#" + getItem.id).attr("src", "assets/img/objects/opaque/" + getItem.name + ".png");

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
    var msg = "Congratulations! <br /> You found all the Hidden Objects! <br /> <br/> Click 'Play Again' to Restart the Game";
    showSplash(msg, 0);
}

function endGame() {
    var msg = "Uh Oh! <br /> Time's Up! <br /> <br/> Click 'Play Again' to Restart the Game";
    showSplash(msg, 0);
}

function ticking() {
    console.log("Seconds changed!");
}

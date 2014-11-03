var objectHash = [];
var find = [];
var clicked;


$(function() {
    setInterval(function() {
        $("#hud").css("height", window.innerHeight*0.15);
        $("#room").css("height", window.innerHeight*0.85);
    }, 100);
});

function initTheme() {
   document.body.style.backgroundImage = "";

    objectHash = objects;

    //objectHash = shuffle(objects);
    for(var i = 0; i < objectHash.length; i++) {
        objectHash[i].id = i+1;
        objectHash[i].silhouette = "<img src='assets/img/objects/silhouettes/" + objectHash[i].name + ".png' id='" + objectHash[i].id
            + "' />";
        objectHash[i].img = "<img src='assets/img/objects/opaque/" + objectHash[i].name + ".png' class='false' id='" + objectHash[i].name
            + "' onclick='processClick(" + objectHash[i].id + ")' />";
        $("#" + objectHash[i].name).css({"width": "50px", "position": "absolute",
            "top": objectHash[i].top + "%", "left": objectHash[i].left + "%"});
    }

    initGame();
}

function createFindList() {

//    for(var i = 0; i < 1; i++) {
//        find.push(objectHash[i]);
//        find[i].img = "<img src='assets/img/objects/opaque/" + find[i].name + ".png' class='true' id='" + find[i].name
//            + "' />";
//    }
}

function initPage() {

//    for(var i=0; i<find.length; i++)
//        $("#" + find[i].parent).append(find[i].img);
//
//    for(var i=10; i<objectHash.length; i++) {
//        $("#" + objectHash[i].parent).append(objectHash[i].img);
//
}

function initGame() {

//    $("#countdown").countdowntimer({
//        seconds: 120,
//        tickInterval: 1,
//        size: "lg",
//        timeUp: endGame()
//    });


    initPage();
    console.log(objectHash[0].img);
    $("#room").append(objectHash[0].img);
    $("#room").append(objectHash[0].silhouette);

}

function getClick() {
    $(".true").on('click', function() {
        processClick($(this).attr("id"));
    });
}

function processClick(id) {
    var getItem;
//
//    $("#"+obj.attr("id")).fadeOut();
//    $("#"+obj.attr(""))

    for(i=0; i<objectHash.length; i++)
    if(id==objectHash[i].id)
        getItem = objectHash[i];

    $("#" + getItem.name).animate({"width": "+=35%", "opacity": 0}, function(){
        $(this).delay().hide();
    });
    $("#" + getItem.id).animate({"width": "+=35%"}).hide();

    $("#" + getItem.id).attr("src", "assets/img/objects/opaque/" + getItem.name + ".png");
    $("#" + getItem.id).animate({"width": "-=35%"}).fadeIn(1000);

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

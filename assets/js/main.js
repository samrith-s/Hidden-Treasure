var victorious=false;
var foundItems=0;
var counter=0;

function initGame() {
    var pages = shuffle(game.pages);
    for(var i = 0; i < pages.length; i++)
        pages[i].objects = shuffle(pages[i].objects);

    initPages(pages);
    $("#countdown").countdowntimer({
        seconds: game.time,
        tickInterval: 1,
        size: "lg",
        timeUp: function(){
            endGame();
        }
    });
}

function initPages(pagesHash) {
    console.log(pagesHash)
    for (i in pagesHash) {
        var thisPage = pagesHash[i];
        $('#pageLinks').append('<div id="' + thisPage.name.toLowerCase() + '" class="pageLink" style="left:' + thisPage.left + '%;top:' + thisPage.top + '%;height:' + thisPage.height + '%;width:' + thisPage.width + '%" ></div>');
        $('#pages').append('<div id="' + thisPage.name.toLowerCase() + 'Page" class="page"><img src="assets/img/pages/' + thisPage.name + '/background.png" class="pageBack"/><a href="#" class="backBtn"><img src="assets/img/back.png"/></a></div>');
        var ct = 0;
        for (j in pagesHash[i].objects) {
            addObject(thisPage, pagesHash[i].objects[j]);
        }
    }

    $('.pageLink').on('click', function () {
        $('#banner').fadeOut();

        a = $(this).attr("id");
        $("#room").css({"opacity": 0.6, "disabled": "disabled"});
        $('#'+a+"Page").fadeIn().find('.backBtn').on('click',function(){
            $('.page').fadeOut();
            $("#room").css("opacity", 1);
            $('#banner').fadeIn();
        });

    });

}

function addObject(thisPage, thisObject) {

    $('#'+thisPage.name.toLowerCase()+"Page").append('<div id="' + thisObject.name.toLowerCase() + '" class="object" style="left:' + thisObject.left + '%;top:' + thisObject.top + '%;height:' + thisObject.height + '%;width:' + thisObject.width + '%"><img src="assets/img/pages/' + thisPage.name + '/'+thisObject.name+'.png" class="objectImg"/></div>');

    if(counter < game.hiddenCount) {
        console.log(counter);
        $('#silhouetteTable').append('<div id="'+thisObject.name.toLowerCase()+'Sil" class="silhouette"><img src="assets/img/pages/' + thisPage.name + '/grey/'+thisObject.name+'.png"/>'+thisObject.name+'</div>')
        counter++;
    }

    $('#'+thisObject.name.toLowerCase()).on('click',function(){
        $this=$(this);
        var pos=$('#'+thisObject.name.toLowerCase()+'Sil').position();
        $this.animate({
                left:pos.left +0.9*$('#pages').width()+30, // Change the formula if the margin for pages changes
                top:pos.top+0.1*$('#pages').height()+172,  // Change the formula if the margin for pages changes
                width:"70px",
                opacity: 1
            },
            function() {
                $('#' + thisObject.name.toLowerCase() + 'Sil img').delay(500).attr("src", "assets/img/pages/" + thisPage.name + "/" + thisObject.name + ".png").css({width: "70px", height: "70px"});
                $('#' + thisObject.name.toLowerCase() + 'Sil').css("text-decoration", "line-through");
            }
        );
        foundItems++;
        checkVictory();
    });
}

function showSplash(msg, delay, callback) {
    if(msg=="win"){
        setTimeout(function(){
            $("#splash").find('img').attr("src","assets/img/win.png")
            $("#splash").fadeIn();
            $('#pages').hide();
        },1000);
    }else{
        $("#room").css({"opacity": 0.6, "disabled": "disabled"});

        $("#splash").fadeIn();
        $('#pages').hide();
    }

}

function checkVictory(){
    if (game.hiddenCount==foundItems){
        victory();
    }
}

function victory() {
    victorious=true;
    showSplash("win", 0);
}

function endGame() {
    if(!victorious){
        showSplash("lose", 0);
    }
}

function ticking() {
}

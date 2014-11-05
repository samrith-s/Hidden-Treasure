var victorious=false;
var foundItems=0;

function initGame() {
    initPages(game.pages);
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
        for (j in pagesHash[i].objects) {
            addObject(thisPage, pagesHash[i].objects[j]);
        }
    }

    $('.pageLink').on('click', function () {
        $('#banner').fadeOut();
        a = $(this).attr("id");
        $('#'+a+"Page").fadeIn().find('.backBtn').on('click',function(){
            $('.page').fadeOut();
            $('#banner').fadeIn();
        });

    });

}

function addObject(thisPage, thisObject) {
    $('#'+thisPage.name.toLowerCase()+"Page").append('<div id="' + thisObject.name.toLowerCase() + '" class="object" style="left:' + thisObject.left + '%;top:' + thisObject.top + '%;height:' + thisObject.height + '%;width:' + thisObject.width + '%"><img src="assets/img/pages/' + thisPage.name + '/'+thisObject.name+'.png" class="objectImg"/></div>');
    $('#silhouetteTable').append('<div id="'+thisObject.name.toLowerCase()+'Sil" class="silhouette"><img src="assets/img/pages/' + thisPage.name + '/grey/'+thisObject.name+'.png"/>'+thisObject.name+'</div>')
    $('#'+thisObject.name.toLowerCase()).on('click',function(){
        $this=$(this);
        var pos=$('#'+thisObject.name.toLowerCase()+'Sil').position();
        $this.animate({
            left:pos.left +0.9*$('#pages').width()+13, // Change the formula if the margin for pages changes
            top:pos.top+0.1*$('#pages').height()+48,  // Change the formula if the margin for pages changes
            width:"40px",
			opacity: 0
        },
		function() {
			$('#' + thisObject.name.toLowerCase() + 'Sil img').delay(500).attr("src", "assets/img/pages/" + thisPage.name + "/" + thisObject.name + ".png").css({width: "50px", height: "50px"});
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

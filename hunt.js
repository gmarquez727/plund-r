function arrYeReady() {
    $('body').css('overflow','hidden');
    $('body').prepend("<div class='plundr'><h2 id='plundr-message' style='color:#fff !important'>Thar be <span class='gold'>gold</span> up ahead, /r/ ye ready?</h2><h2>Click the gold on a gilded comment to collect yer booty!</h2><h2 id='timer'></h2></div>");
}

function tharBeGold() {
    var allTheGolds = $('.gilded-icon');
    var allThePosts = allTheGolds.parents('.entry');

    return allThePosts.length >0;
}
function yerLookinFerGold() {
    chrome.runtime.sendMessage({ plundrable : true }, function(response) {
        if(response.plundrable == true) {
            arrYeReady();
            tick();
            $('a').click(function(e) {
                e.preventDefault();
                $(this).css('display','none');
            });
        }
    });
}

function tick(){
    var seconds = 6;
    var timer = setInterval(function() {
        seconds--;
        if( seconds > 0) {
            $('#timer').html(seconds);
        }   
        else if( seconds == 0 ) {
            $('#timer').html("YARRRRRRRRR");
        }
        else{
            $('body').css('overflow','');
            $('.plundr').css('display','none');
            clearInterval(timer);
        }
    }, 1000);

}

$(function(){

    if( tharBeGold() ) {
        yerLookinFerGold();
    }

});

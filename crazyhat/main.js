var player;
var currentPlay = 0;
function onYouTubeIframeAPIReady(){
	document.getElementById('player').style.display='none';
	document.getElementById('pic1').style.display='none';
	document.getElementById('pic0').style.display='none';
    player=new YT.Player("player",
     {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],
            "end":playTime[currentPlay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
            
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
            
        }
     });
}
function onPlayerReady(event){
    $("#playButton").click(function(){
		document.getElementById('player').style.display='';
		document.getElementById('pic1').style.display='';
		document.getElementById('pic0').style.display='';
		document.getElementById('pic2').style.display='none';
		document.getElementById('first').style.display='none';
		document.getElementById('playButton').style.display='none';
		document.getElementById('pic2').setAttribute('src',"dance.gif");
		document.getElementById("first").innerHTML ="Dance with Hatter!!!";
        $("h3").text(player.getVideoData().title);
        player.playVideo();
    });
}
function onPlayerStateChange(event){
    if(event.data == 0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1])){
		if(currentPlay <= 0){
				 document.getElementById('pic2').style.display='';
				 document.getElementById('first').style.display='';
		}
        if(currentPlay < playList.length -1){
             currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                 "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{
            currentPlay=0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                 "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        
    }
    if(player.getVideoLoadedFraction()>0){
        $("h3").text(player.getVideoData().title);
    }
}

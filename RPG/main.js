var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;
var sizea=150;
var time2=time6=time4=try1=0;
var num = Math.floor(Math.random() *3);
var sizeofalice=[50,100,200];
	var from = 0;//左1右2
	var truth=0;//1拿劍
$(document).ready(function(){
	document.getElementById("talk1").style.display="none";
	document.getElementById("game").style.display="";
	document.getElementById("buff").style.display="none";
    mapArray = [1,8,1,8,1,8,1,
				8,1,2,1,8,3,8,
				0,0,0,4,0,0,1,
				1,1,0,1,0,0,8,
				8,1,6,1,7,0,1,
				1,8,1,8,1,5,8];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/down.png";
    currentImgMainX = 0;
    currentImgMainY = 400;
	var xvalue = 465;
	var yvalue = 70;
    imgMain.onload=function()
    {
		ctx.drawImage(imgMain,171,405,171,354,currentImgMainX,currentImgMainY,150,150);
    };
    
    imgMountain = new Image();
    imgMountain.src = "images/tree.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/dragon1.png";
	imgeatme = new Image();
	imgeatme .src = "images/material2.png";
	imgdrinkme=new Image();
	imgdrinkme.src ="images/DRINK.png";
	imgweapon=new Image();
	imgweapon.src="images/weapon.png";
	imgdoor=new Image();
	imgdoor.src ="images/lock.png";
	imgexist=new Image();
	imgexist.src ="images/exist.png";
	imggreen=new Image();
	imggreen.src ="images/tree.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(var x in mapArray)
            {
                if(mapArray[x]==1)
                {
                    ctx.drawImage(imgMountain,45,240,99,101,x%7*200,Math.floor(x/7)*200,200,200);
                }
                else if(mapArray[x]==3)
                {
                  ctx.drawImage(imgEnemy,0,0,794,765,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				else if(mapArray[x]==2){
					ctx.drawImage(imgeatme,0,0,260,260,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				else if(mapArray[x]==6){
					ctx.drawImage(imgdrinkme,0,0,880,1015,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				else if(mapArray[x]==4){
					ctx.drawImage(imgdoor,0,0,865,967,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				else if(mapArray[x]==7){
					ctx.drawImage(imgweapon,0,0,800,800,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				else if(mapArray[x]==5){
					ctx.drawImage(imgexist,85,25,145,145,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				else if(mapArray[x]==8){
					ctx.drawImage(imggreen,240,240,95,101,x%7*200,Math.floor(x/7)*200,200,200) ;    
                }
				
            }
        }; 

	};
	
});
$(document).keydown(function(event){ 
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;

	
    event.preventDefault();
    switch(event.which){
		
        case 37:
			
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
		if(targetImgMainX<=1200 && targetImgMainX>=0 && targetImgMainY<=1000 && targetImgMainY>=0){
			targetBlock = targetImgMainX/200 + targetImgMainY/200*7;
		}
		else{
         targetBlock=-1;
		}
		ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
			if(mapArray[targetBlock]==0 && targetBlock != -1)
			{
				
				$("#talkBox").text("");
				currentImgMainX = targetImgMainX;
				currentImgMainY = targetImgMainY;
			}
			
			if(truth==0){
				
				imgMain=new Image();
				imgMain.src = "images/BB.png";
				ctx.drawImage(imgMain,39,71,175,282,currentImgMainX,currentImgMainY,sizea,sizea);
			}
			else{
				imgMain=new Image();
				imgMain.src = "images/attack.png";
			ctx.drawImage(imgMain,170,260,430,600,currentImgMainX,currentImgMainY,sizea,sizea);
			}
			from=1;
            break;

			

			
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
			
				 
		if(targetImgMainX<=1200 && targetImgMainX>=0 && targetImgMainY<=1000 && targetImgMainY>=0){
			targetBlock = targetImgMainX/200 + targetImgMainY/200*7;
		}
		else{
        targetBlock=-1;
		}
		ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
			if(mapArray[targetBlock]== 0 && targetBlock != -1)
			{
            $("#talkBox").text("");
				currentImgMainX = targetImgMainX;
				currentImgMainY = targetImgMainY;
			}
			
			if(truth==0){
				imgMain=new Image();
			imgMain.src = "images/back.png";
			ctx.drawImage(imgMain,150,25,164,360,currentImgMainX,currentImgMainY,sizea,sizea);
			}
			else{
				if(from==0||from==1){
				imgMain=new Image();
				imgMain.src = "images/attack.png";
				ctx.drawImage(imgMain,182,267,470,575,currentImgMainX,currentImgMainY,sizea,sizea);
				}
				else{
				ctx.drawImage(imgMain,710,265,470,575,currentImgMainX,currentImgMainY,sizea,sizea);
				}
			}
			from=0;
            break;
			
        case 39:
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
			
				 
		if(targetImgMainX<=1200 && targetImgMainX>=0 && targetImgMainY<=1000 && targetImgMainY>=0){
			targetBlock = targetImgMainX/200 + targetImgMainY/200*7;
		}
		else{
         targetBlock=-1;
		}
		ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
			if(mapArray[targetBlock]==0 && targetBlock != -1)
			{
            $("#talkBox").text("");
				currentImgMainX = targetImgMainX;
				currentImgMainY = targetImgMainY;
			}
			
			if(truth == 0){
				imgMain=new Image();
				imgMain.src = "images/AA.png";
				ctx.drawImage(imgMain,42,69,182,257,currentImgMainX,currentImgMainY,sizea,sizea);
			}
			else{
				imgMain=new Image();
				imgMain.src = "images/attack.png";
			ctx.drawImage(imgMain,710,265,470,575,currentImgMainX,currentImgMainY,sizea,sizea);
			}
			from=2;
            break;
			
        case 40:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
	 
		if(targetImgMainX<=1200 && targetImgMainX>=0 && targetImgMainY<=1000 && targetImgMainY>=0){
			targetBlock = targetImgMainX/200 + targetImgMainY/200*7;
		}
		else{
        targetBlock=-1;
		}
			ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
			if(mapArray[targetBlock]==0 && targetBlock != -1)
			{
				$("#talkBox").text("");
				currentImgMainX = targetImgMainX;
				currentImgMainY = targetImgMainY;
			} 
			
			if(truth==0){
				imgMain=new Image();
			imgMain.src = "images/down.png";
			ctx.drawImage(imgMain,171,405,171,354,currentImgMainX,currentImgMainY,sizea,sizea);
			}
			else{
				if(from==0||from==1){
				imgMain=new Image();
				imgMain.src = "images/attack.png";
				ctx.drawImage(imgMain,182,267,470,575,currentImgMainX,currentImgMainY,sizea,sizea);
				}
				else{
				ctx.drawImage(imgMain,710,265,470,575,currentImgMainX,currentImgMainY,sizea,sizea);
				}
			}
			from=0;
            break;
        default:
            return;
    }
    
	
    switch(mapArray[targetBlock]){
            case undefined:
                $("#talkBox").text(" ");
            break;
            case 1:
                 $("#talkBox").text("不能爬樹呦，妳有更重要的事要做");
            break;
            case 2:
			if(time2!=0){
				   alert("已經沒效囉"); 
			}
			else {
				imgMain=new Image();
				imgMain.src = "images/back.png";
                 $("#talkBox").text("吃蛋糕會長高呦"); 
				 sizea = sizea + 50;
				 time2 = time2 + 1;
				 alert("+50"); 				 
				 ctx.clearRect(400,200,200,200); 
				 ctx.clearRect(currentImgMainX, currentImgMainY,200,200);	
				 ctx.drawImage(imgMain,150,25,164,360,currentImgMainX, currentImgMainY,sizea,sizea);
				 ctx.drawImage(imgMountain,45,240,99,101,9%7*200,Math.floor(9/7)*200,200,200);
			}
            break;
            case 3:
			
			if(truth==0){
				document.getElementById("game").style.display="none";
				document.getElementById("buff").style.display="";
				document.getElementById("buff").setAttribute("src","images/deadalice.jpg")
				document.getElementById("buff").style.display="images/boys.jpg";
				document.getElementById("talk").innerHTML="沒有武器是殺不死龍的You so stubid, you are not Alice! ";
				
			}
			else{
				document.getElementById("game").style.display="none";	
				document.getElementById("buff").style.display="";
				document.getElementById("buff").setAttribute("src","images\boys.jpg")
				document.getElementById("talk").innerHTML=" YOU WIN!!You are the Alice!";
			}
            break;
			
			case 4:	
			imgMain=new Image();
			var n = sizeofalice[num];
			if(sizea == n){
				alert("不可回頭囉")
				imgMain.src = "images/AA.png";
				imgdoor=new Image();
				if(time4==0){
				ctx.clearRect(600,400,200,200);
				ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
				currentImgMainX = currentImgMainX + 200;
				ctx.drawImage(imgMain,42,69,182,257,currentImgMainX,currentImgMainY,sizea,sizea);
				time4++;
				}

				imgdoor.src ="images/open.png";
				ctx.drawImage(imgdoor,0,0,296,306,17%7*200,Math.floor(17/7)*200,200,200);
				
			}
			else{
				$("#talkBox").text("小提示:"+ sizeofalice[num]);
				alert("小提示:"+ sizeofalice[num]);
			}
			break;
			
			case 5:
				document.getElementById("game").style.display="none";
				document.getElementById("talk1").style.display="";
				document.getElementById("buff").setAttribute("src","images/deadalice.jpg")
				document.getElementById("buff").style.display="";
				document.getElementById("talk").innerHTML=" 妳已迷失自我";
			break;
			
			case 6:
			if(time6 == 2){
				   alert("已經喝完囉"); 
			}
			else{
                 $("#talkBox").text("縮小藥水");
				 
				 sizea = sizea - 50;
				 time6 = time6 + 1;
				 alert("-50"); 
				 ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
				ctx.drawImage(imgMain,171,405,171,354,currentImgMainX,currentImgMainY,sizea,sizea);
				 if(time6 == 2){
				  ctx.clearRect(400,800,200,200);
				ctx.drawImage(imgMountain,45,240,99,101,30%7*200,Math.floor(30/7)*200,200,200);}
				 
			}	 
				
			
            break;
			
			case 7:
			$("#talkBox").text("You got a weapon!");
			imgMain=new Image();
			imgMain.src = "images/attack.png";
			if(try1==0){

			ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
			ctx.drawImage(imgMain,182,267,470,575,currentImgMainX,currentImgMainY,sizea,sizea);
			ctx.clearRect(800,800,200,200);	
			ctx.drawImage(imgMountain,45,240,99,101,32%7*200,Math.floor(32/7)*200,200,200);
			}
			
			
			truth=1;
			break;
			
			
        }
});

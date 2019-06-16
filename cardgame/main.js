
$(document).ready(function(){
	document.getElementById('button1').style.display='none';
    $("input").click(function()
    {  	time += 1;
		document.getElementById("butt").style.display='none';
        document.getElementById("pic1").style.display='none';
		document.getElementById("ali").setAttribute('src',"CARD/a.jpg");
		document.getElementById("q").setAttribute('src',"CARD/queen.jpg");
		document.getElementById('ali').style.display='';
		document.getElementById('q').style.display='';
		document.getElementById('pic').style.display='';
		document.getElementById('pic2').style.display='';
		if(num==0){
		
        var numberofListItem = cardcolor.length *cardnum.length ;//52
		
        var randomChildNumber=Math.floor(Math.random() * numberofListItem);
		
         document.getElementById("pic").setAttribute('src',"CARD/"+randomChildNumber+".jpg");
		 document.getElementById("pic").setAttribute('src',"CARD/"+randomChildNumber+".jpg");
        var randomChildNumber2=Math.floor(Math.random() * numberofListItem);
		 document.getElementById("pic2").setAttribute('src',"CARD/"+randomChildNumber2+".jpg");
		 var cacolor = ((randomChildNumber + 1) / 4) - 1;
		 var canum = ((randomChildNumber+ 1) % 4) - 1;
		 var cacolor2 = ((randomChildNumber2 + 1) / 4) - 1;
		 var canum2 = ((randomChildNumber2+ 1) % 4) - 1;
		 if(cacolor > cacolor2){
			 document.getElementById("win/lose").innerHTML ="You Win!!!";
			  num = 1;
		 }
		 else if(cacolor < cacolor2){
			 
			 document.getElementById("win/lose").innerHTML ="You Lose!!!";
			 num = 2;
		 }
		 else{//cacolor == cacolor2
			  if(canum > canum2){
			  document.getElementById("win/lose").innerHTML ="You Win!!!";
			  num = 1;
			  }
			  else if (canum < canum2){
			  document.getElementById("win/lose").innerHTML ="You Lose!!!";
			  num = 2;
			  }
			  else{
				  document.getElementById("win/lose").innerHTML ="Your cards are the same.";
				  num = 3;
			  }
			  
		 }
		 document.getElementById('end').style.display='';
		 document.getElementById("end").innerHTML ="點擊下方按鈕查看後續劇情";
		 document.getElementById('button1').style.display='';
		}
		if(time==2){
			document.getElementById('button1').style.display='none';
			document.getElementById('end').style.display='none';
			document.getElementById('win/lose').style.display='none';
			document.getElementById('ali').style.display='none';
			document.getElementById('q').style.display='none';
			document.getElementById('pic').style.display='none';
			document.getElementById('pic2').style.display='none';
			if(num == 1){
			document.getElementById("pic1").setAttribute('src',"CARD/out.jpg");
			document.getElementById('pic1').style.display='';
			
			}
			else if(num == 2){
				
			document.getElementById("pic1").setAttribute('src',"CARD/win.jpg");
			document.getElementById('pic1').style.display='';
			
			}
			else{
			document.getElementById("win/lose").innerHTML="Nooooo!! You need to play one more time,click the button";
			num = 0;
			time = 0;
			document.getElementById('win/lose').style.display='';
			document.getElementById('pic1').style.display='';
			document.getElementById('butt').style.display='';
			}
			
		}
    });
});
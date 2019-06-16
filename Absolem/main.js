
$(document).ready(function(){
     document.getElementById("absolem").style.display="none";
	document.getElementById("alice").style.display="none";
    var currentQuiz=null;
    $("#startButton").click(function(){
        if(currentQuiz == null)
        {
			document.getElementById("firstmeet").style.display="none";
			document.getElementById("absolem").style.display="";
			document.getElementById("alice").style.display="";
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>" + questions[0].answers[x][0]+"</label><br><br>");    
            }
            $("#startButton").attr("value","Next");
        }
        else
        {
            $.each($(":radio"),function(i,val){
                if(val.checked){
					 document.getElementById("buffer").style.display="none";
					  document.getElementById("buffer1").style.display="none";
					  document.getElementById("imgbuffer").style.display="none";
                    if(isNaN(questions[currentQuiz].answers[i][1]))
                    {   document.getElementById("absolem").style.display="none";
                        document.getElementById("startButton").style.display="none";
						document.getElementById("buffer").style.display="none";
                        var finalResult = questions[currentQuiz].answers[i][1];
						$("#question").empty(); 
						$("#question").append(finalAnswers[finalResult][1]+"<br><br>");
						$("#options").empty(); 
						document.getElementById("buffer1").style.display="";
						document.getElementById("buffer1").innerHTML=finalAnswers[finalResult][0];
                        currentQuiz=null;

                    }
                    else
                    {
						if(currentQuiz == 0 && i == 1){
						    document.getElementById("buffer").style.display="";
							document.getElementById("buffer").innerHTML="You are not Absolem, I am Absolem!"
						}
						else if(currentQuiz == 0 && i == 0){
						   alert(' Absolem: "We shall see." ');
							 document.getElementById("buffer1").style.display="";
							document.getElementById("buffer1").innerHTML="你什麼意思? 我知道自己是誰!!"
						}
						else if(currentQuiz == 2 && i == 0){
						   alert(' Absolem: "We shall see." ');
							 document.getElementById("buffer1").style.display="";
							document.getElementById("buffer1").innerHTML="你什麼意思? 我知道自己是誰!!"
						}
						else if(currentQuiz == 1 && i == 0){
							document.getElementById("buffer").style.display="";
						    document.getElementById("buffer").innerHTML=" Open the oraculum."
							 document.getElementById("imgbuffer").style.display="";
						    document.getElementById("imgbuffer").setAttribute('src',"pic/ocu.jpg");
						}
						else if(currentQuiz == 3 && i == 0){
						    document.getElementById("alice").setAttribute('src',"pic/abso2.png");
							document.getElementById("absolem").setAttribute('src',"pic/dormouse.png");
							document.getElementById("buffer").style.display="";
						    document.getElementById("buffer").innerHTML=" Is she the Alice, Absolem? "
						}
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0;x<questions[currentQuiz].answers.length;x++)
                        {
                            $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>" + questions[currentQuiz].answers[x][0]+"</label><br><br>");    
                        }
                    }
                    return false;
                }
            });
        }
        
        
        
        
    });
});

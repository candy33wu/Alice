$(document).ready(function(){
	$("#courseTable").append("<tr><th>關卡</th><th>時間</th><th>主題內容</th></tr>");
	document.getElementById("courseTable2").style.display="none";
	
	var topicCount = topic.length;
    
    var secondUnit=1000;
    var minuteUnit = secondUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit = hourUnit*24;
	
    for(var x = 0;x<topicCount;x++)
    {
        if(topic[x] == "弒龍日"){
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td id='td1'>" + (x+1) + "</td>");
            $("#courseTable").append("<td id='td1'>" + 
            (new Date (startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable").append("<td id='td1'>" + topic[x] + "</td>");
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>" + (x+1) + "</td>");
            $("#courseTable").append("<td>" + 
                (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td>" + topic[x] + "</td>");
            $("#courseTable").append("</tr>");
       }

    }
});
var topic = [
    "開始奇幻旅程",
    "與Absolem的最初談話",
	"初見柴郡貓",
    "MAD TEA PARTY ",
	"與Absolem的第二次談話",
    "參見紅心皇后",
	"與Absolem的最終談話",
    "弒龍日" 
];
var m = 0;
var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
	
}; 

function myFunction() {
	const month1 = document.getElementById("month");
	const nmonth = month1.value;
	const day1 = document.getElementById("day");
	const nday = day1.value;
	setMonthAndDay(nmonth,nday);
	 
	var topicCount = topic.length;
	  var secondUnit=1000;
    var minuteUnit = secondUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit = hourUnit*24;
	document.getElementById("courseTable").style.display="none";
	document.getElementById("inputdata").style.display="none";
	document.getElementById("courseTable2").style.display="";
	$("#courseTable2").append("<tr><th>關卡</th><th>時間</th><th>主題內容</th></tr>");
   for(var x = 0;x<topicCount;x++)
    {
        if(topic[x] == "弒龍日"){
            $("#courseTable2").append("<tr>");
            $("#courseTable2").append("<td id='td1'>" + (x+1) + "</td>");
            $("#courseTable2").append("<td id='td1'>" + 
            (new Date (startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5) + "</td>");
            $("#courseTable2").append("<td id='td1'>" + topic[x] + "</td>");
            $("#courseTable2").append("</tr>");
        }
        else{
            $("#courseTable2").append("<tr>");
            $("#courseTable2").append("<td>" + (x+1) + "</td>");
            $("#courseTable2").append("<td>" + 
                (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable2").append("<td>" + topic[x] + "</td>");
            $("#courseTable2").append("</tr>");
       }

    }
	
};



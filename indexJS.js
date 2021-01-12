//现在时间
function time() {
    var date = new Date();
    var years = date.getFullYear();
    var month=date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var str = years+"-"+month+"-"+day+"&nbsp;"+hour+":"+minutes+":"+seconds;
    var nowTime = document.getElementById('nowTime');
    nowTime.innerHTML = str;
}
time();
setInterval(time,1000);

var openChangeNum = 0;
var closeChangeNum = 0;
function openChange(){
    openChangeNum += 1;
    console.log(openChangeNum);
    if(openChangeNum == 6){
        document.getElementById('box').style.display='block'
        openChangeNum=0;
    }
}
function closeChange(){
    closeChangeNum += 1;
    console.log(closeChangeNum);
    if(closeChangeNum == 6){
        document.getElementById('box').style.display='none'
        closeChangeNum=0;
    }
}

var cName = document.getElementById('cName');
var cId = document.getElementById('cId');
var cStarEndTime = document.getElementById('cStarEndTime');
var cPlace = document.getElementById('cPlace');
var cPS = document.getElementById('cPS');
var cPostTime = document.getElementById('cPostTime');
var cTeacherTime = document.getElementById('cTeacherTime');

var dName = document.getElementById('dName');
var dId = document.getElementById('dId');
var dStarTime = document.getElementById('dStarTime');
var dEndTime = document.getElementById('dEndTime');
var dPlace = document.getElementById('dPlace');
var dPS = document.getElementById('dPS');
var dPostTime = document.getElementById('dPostTime');
var dTeacherTime = document.getElementById('dTeacherTime');

function submit(){
    var cNameLog = String(cName.value);
    var cIdLog = String(cId.value);
    var cStarEndTimeLog = String(cStarEndTime.value);
    var cPlaceLog = String(cPlace.value);
    var cPSLog = String(cPS.value);
    var cPostTimeLog = String(cPostTime.value);

    dName.innerHTML = cNameLog;
    dId.innerHTML = cIdLog;
    dStarTime.innerHTML = cStarEndTimeLog+"&nbsp;"+"06:00";
    dEndTime.innerHTML = cStarEndTimeLog+"&nbsp;"+"23:00";
    dPlace.innerHTML = cPlaceLog;
    dPS.innerHTML = cPSLog;
    dPostTime.innerHTML = cPostTimeLog+"<br/>"+"11:32:44";
    dTeacherTime.innerHTML = cPostTimeLog+"<br/>"+"12:27:25";
}
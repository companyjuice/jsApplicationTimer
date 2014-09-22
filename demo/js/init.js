
/***************************************************
	Init object
***************************************************/
var applicationTimer = new jsApplicationTimer();

applicationTimer.callBackMethod = stopTimer;
applicationTimer.timer  = 5;
applicationTimer.start();


function stopTimer() {
    alert('Hello world!');
}
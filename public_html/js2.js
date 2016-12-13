/*GAME SCRIPT*/

gamelength = 30;
timerID = null;
var playing = false;
var numholes = 6 * 10;
var currentpos = -1;
function clrholes() {
    for (var k = 0; k < document.formtable2.elements.length; k++)
        document.formtable2.elements[k].checked = false;
}
function stoptimer() {
    if (playing)
        clearTimeout(timerID);
}
function showtime(remtime) {
    document.formtable1.timeleft.value = remtime;
    if (playing) {
        if (remtime === 0) {
            stopgame();
            return;
        }
        else {
            temp = remtime - 1;
            timerID = setTimeout("showtime(temp)", 1000);
              }
       }
}
function stopgame() {
    stoptimer();
    playing = false;
    document.formtable1.timeleft.value = 0;
    clrholes();
    display("Game Over");
    alert('Game Over.\nYour score is :  ' + totalhits);
}
function play() {
    stoptimer();
    if (playing) {
        stopgame();
        return;
    }
    playing = true;
    clrholes();
    totalhits = 0;
    document.formtable1.score.value = totalhits;
    display("Playing ... ");
    launch();
    showtime(gamelength);
}
function display(msg) {
    document.formtable1.state.value = msg;
}
function launch() {
    var launched = false;
    while (!launched) {
        mynum = random();
        if (mynum !== currentpos) {
            document.formtable2.elements[mynum].checked = true;
            currentpos = mynum;
            launched = true;
              }
       }
}
 
function hitradio(id) {
    if (playing === false) {
        clrholes();
        display("Push Start to Play");
        return;
    }
    if (currentpos !== id) {
        totalhits += -1;
        document.formtable1.score.value = totalhits;
        document.formtable2.elements[id].checked = false;
    }
    else {
        totalhits += 1;
        document.formtable1.score.value = totalhits;
        launch();
        document.formtable2.elements[id].checked = false;
       }
}
 
function random() {
    return(Math.floor(Math.random() * 100 % numholes));
}
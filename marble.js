var winner="";
function marbleGo(el,rate) {
    var elem = document.getElementById(el);
    var pos = 0;
    var id = setInterval(track, rate);
    function track() {
        if (pos == 1100) {
            
            clearInterval(id);
            if (winner.length == 0) {
                winner = el;
                document.getElementById("winner").innerHTML = "Winner is the "+el+" marble!";
            } else {
                document.getElementById("btnStart").className = "readybutton";
                document.getElementById("btnStart").innerText = "Click To Start";
            }
        } else {
            pos++;
            elem.style.left = pos + 'px';
        
        }
    }
}
function start(btn) {
    winner = "";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("btnStart").innerText = "Race";
    btn.className = "greenbutton";
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 1);

    marbleGo("red", x);
    marbleGo("yellow", y);
}
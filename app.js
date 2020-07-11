var min = 0;
var sec = 0;
var mili = 0;
var minheadiny = document.getElementById("min")
var secheadiny = document.getElementById("sec")
var miliheadiny = document.getElementById("mili")

var inter ;
function timer(){
    mili++
    miliheadiny.innerHTML= mili
    if(mili >= 100){
       sec++
       secheadiny.innerHTML=sec
       mili = 0
    }else if(sec >= 60){
        min++
        minheadiny.innerHTML= min
        sec=0
    }
}
function start(){
 inter = setInterval(timer,10)
}
function stop(){
    clearInterval(inter)
}
function reset(){
    min =0
    sec = 0
    mili = 0
    minheadiny.innerHTML=min
    secheadiny.innerHTML=sec
    miliheadiny.innerHTML=mili
    stop()
}
function laps(){
    var q = min.toString()
    var w = sec.toString()
    var e = mili.toString()
    var z = q.slice(0,2)
    var x = w.slice(0,2)
    var c = e.slice(0,2)
    document.getElementById("laps"). innerHTML=( z + " : " + x + " : " + c )
}
 var status = "stopped"
function startStop(){
    if(status === "stopped"){
        start()
        document.getElementById("Start").innerHTML = "Stop"
        status = "started"
    }
    else{
      stop()
      document.getElementById("Start").innerHTML = "Start"
      status = "stopped"
    }
}


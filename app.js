function time(){
    
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var clock = document.getElementById('clock');
    var setHours = document.getElementById('hours');
    var setMinutes = document.getElementById('minutes');
    var setSeconds = document.getElementById('seconds');

    var tiempo = hours +":" + minutes +":"+ seconds;

    if(hours < 10){
        hours = "0" + hours;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }

    setHours.innerHTML = hours;
    setMinutes.innerHTML = minutes;
    setSeconds.innerHTML = seconds;

    setTimeout(time, 1000);
    
};

time();



class time {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    getHour(){
        return this.hour;
    }

    getMinute(){
        return this.minute;
    }

    getSecond(){
        return this.second;
    }


    integerConversion(){
        this.hour = parseInt(this.hour);
        this.minute = parseInt(this.minute);
        this.second = parseInt(this.second);
    }

    check(){
        if (this.hour > 23 || this.hour < 0 || this.minute > 59 ||
            this.minute < 0 || this.second > 59 || this.second < 0){
            window.alert("The input is incorrect.");
        }
    }
}

function input(){
    let hour = 0;
    let minute = 0;
    let second = 0;

    let hourInput = document.getElementById("hour").value;
    let minuteInput = document.getElementById("minute").value;
    let secondInput = document.getElementById("second").value;

    if (hourInput !== ""){
        hour = hourInput;
    }

    if (minuteInput !== ""){
        minute = minuteInput;
    }

    if (secondInput !== ""){
        second = secondInput;
    }

    //console.log(hour + "h " + minute + "m " + second + "s");

    let t = new time(hour, minute, second);
    t.integerConversion();
    t.check();

    hour = t.getHour();
    minute = t.getMinute();
    second = t.getSecond();

    let remainingTime = (hour * 60 * 60) + (minute * 60) + second;
    timer(remainingTime);
}

function timer(remainingTime){
    let timer = setInterval(function(){


        let h = Math.floor(remainingTime / (3600));
        let m = Math.floor((remainingTime % 3600) / 60);
        let s = Math.floor(remainingTime % 60);

        remainingTime--;

        if (h < 10){
            h.toString();
            h = "0" + h;
        }

        if (m < 10){
            m.toString();
            m = "0" + m;
        }

        if (s < 10){
            s.toString();
            s = "0" + s;
        }

        console.log(h + ":" + m + ":" + s);
        document.getElementById("remainingTime").innerHTML = h + ":" + m + ":" + s;

        if (remainingTime < 0) {
            document.getElementById("remainingTime").innerHTML = h + ":" + m + ":" + s;
            clearInterval(timer);
            window.alert("Time Up!!")
        }
    }, 1000);
}

window.onload = function () {
    let startBtn = document.getElementById('button-start');
    let stopBtn = document.getElementById('button-stop');
    let resetBtn = document.getElementById('button-reset');
    let appendsTens = document.getElementById('tens');
    let appendsSeconds = document.getElementById('seconds');

    let tens = 00;
    let seconds = 00;
    let Interval;


    startBtn.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer)
    }
    stopBtn.onclick = function () {
        clearInterval(Interval);

    }
    resetBtn.onclick = function () {
        clearInterval(Interval);
        tens = '00';
        seconds = '00'
        appendsTens.innerHTML = tens;
        appendsSeconds.innerHTML = seconds;
    }


    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendsTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendsTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendsSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendsTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
            appendsSeconds.innerHTML = seconds;
        }
    }


}
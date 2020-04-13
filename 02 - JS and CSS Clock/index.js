let _timer = undefined;
let _secondHand = undefined;
let _minuteHand = undefined;
let _hourHand = undefined;

window.addEventListener('load', () => {
    _secondHand = document.querySelector('.second-hand');
    _minuteHand = document.querySelector('.min-hand');
    _hourHand = document.querySelector('.hour-hand');
    _timer = setInterval(updateClock, 1000);
});

var updateClock = () => {
    const _time = getCurrentTime();

    const _secPos = ((_time.Seconds / 60) * 360) + 90;
    const _minPos = ((_time.Minutes / 60) * 360) + 90;
    const _hourPos = ((_time.Hour / 12) * 360) + 90 + ((_time.Minutes/60) * 30);

    if(_secondHand != undefined && _minuteHand != undefined && _hourHand != undefined)
    {
        _secondHand.setAttribute("style", `transform: rotate(${_secPos}deg);`);
        _minuteHand.setAttribute("style", `transform: rotate(${_minPos}deg);`);
        _hourHand.setAttribute("style", `transform: rotate(${_hourPos}deg);`);
    }
};

var getCurrentTime = () => {
    const _date = new Date();
    const _time = {};
    _time.Seconds = _date.getSeconds();
    _time.Minutes = _date.getMinutes();
    _time.Hour = _date.getHours() > 12 ? _date.getHours() - 12 : _date.getHours();
    return _time;
};
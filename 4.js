
function printNumbers(from, to) {

    let timerId = setInterval(function () {
        console.log(from);
        if (from == to) {
            clearInterval(timerId);
        } from++;
    }, 1000);
};

printNumbers(5, 10);


const printNumbers = (from, to) => {
    let timerId = setInterval(function () {
        console.log(from);
        if (from == to) {
            clearInterval(timerId);
        } from++;
    }, 1000);
};

printNumbers(5, 10);

function getNum() {
    let arr = [1, 2, 3, 4, "abc", "", null, 0, null];
    let chet = 0;
    let nechet = 0;
    let nullCount = 0;
    let null0 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'string') {
            if (arr[i] == null) {
                nullCount++
            } else if (arr[i] === 0) {
                null0++
            } else if (arr[i] % 2 == 0) {
                chet++
            } else {
                nechet++
            }
        }
    }



    console.log('Четных чисел ' + chet);
    console.log('Нечетных чисел ' + nechet);
    console.log('Null ' + nullCount);
    console.log('Нулей ' + null0);

}
getNum()



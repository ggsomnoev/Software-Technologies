/**
 * Created by ggsomnoev on 12/7/2016.
 */

function arrayInit(size, lines) {
    let arr = [];
    for(let i = 0; i < size; i++) {
        arr[i] = 0;
    }

    for (line of lines) {
        let val = line.split(' ').filter(x => x!='-');
        if(val[0] < size) {
            arr[val[0]] = val[1];
        }
    }
    for (let a of arr) {
        console.log(a);
    }
}

let input = [
    "0 - 3",
    "3 - -1",
    "4 - 2",
    "0 - 3"
]
arrayInit(5, input)

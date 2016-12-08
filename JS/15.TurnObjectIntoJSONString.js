/**
 * Created by ggsomnoev on 12/8/2016.
 */


function objToJson(jsInp) {
    let obj = {};
    for(let i = 0; i < jsInp.length; i++) {
        let val = jsInp[i]
            .replace("->", ' ')
            .split(' ')
            .filter(x => x != "")
        obj[val[0]] = val[1];
    }
    console.log(obj);
    console.log('\n' + JSON.stringify(obj));
}

let input = [
    "name -> Angel",
    "surname -> Georgiev",
    "age -> 20",
    "grade -> 6.00",
    "date -> 23/05/1995",
    "town -> Sofia"
]

objToJson(input)

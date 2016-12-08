/**
 * Created by ggsomnoev on 12/8/2016.
 */

function jsonToStr(jsInp) {
    let obj;
    for(let i = 0; i < jsInp.length; i++) {
        obj = JSON.parse(jsInp[i]);
        console.log("Name: " + obj.name)
        console.log("Age: " + obj.age)
        console.log("Date: " + obj.date)
        console.log()
    }
    let objTwo = JSON.stringify(obj)
    console.log(objTwo)
}

let input = [
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]

jsonToStr(input);
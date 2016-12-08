/**
 * Created by ggsomnoev on 12/8/2016.
 */
function addValues(userInp) {
    let multipleValues = {}
    let keyValue = [];
    let keyWord;
    for(let i = 0; i < userInp.length; i++) {
        if( userInp[i].split(' ')[1] == undefined) {
            keyWord = userInp[i];
            break;
        } else {
            keyValue = userInp[i].split(' ');
            multipleValues[keyValue[0]] = multipleValues[keyValue[0]] || [];
            multipleValues[keyValue[0]].push(keyValue[1]);
        }
    }
    //console.log(multipleValues);
    if (multipleValues[keyWord] != undefined) {
        for(let item of multipleValues[keyWord]) {
            console.log(item);
        }
    } else {
        console.log("None");
    }
}

let input = [
    "key value",
    "key eulav",
    "test tset",
    "key"
];
addValues(input);

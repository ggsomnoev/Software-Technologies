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
            keyValue = userInp[i].split(' ')
            multipleValues[keyValue[0]] = (keyValue[1])
        }
    }
    if (multipleValues[keyWord] != undefined) {
        console.log(multipleValues[keyWord]);
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
/**
 * Created by ggsomnoev on 12/8/2016.
 */

function AddOrRemoveItem(input) {
    let array = [];
    for(let i = 0; i < input.length; i++) {
        let commandValue = input[i].split(' ');
        if(commandValue[0] == "add") {
            array.push(commandValue[1]);
        } else if (commandValue[0] == "remove"&& array.length > 0) {
            console.log("!");
            array.splice(commandValue[1], 1);
        }
    }
    console.log(array);
}

let userInp = [
    "add 3",
    "add 5",
    "remove 0",
    "add 7"
];
AddOrRemoveItem(userInp);

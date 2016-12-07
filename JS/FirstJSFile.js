/**
 * Created by ggsomnoev on 12/5/2016.
 */
function numMultiply(n) {
    return n * 2;
}

function mupltipTwo(x, y) {
    return x * y;
}

function multDiv(x, y) {
   if (x > y) {
       return x / y;
   } else {
       return x * y;
   }
}

function posOrNeg(nums) {
    let counter = 0;
    for (let n of nums) {
        if(n < 0) {
            counter++;
        } else if(n == 0) {
            console.log("positive!")
            return;
        }
    }
    if (counter % 2 == 0) {
        console.log("positive")
    } else {
        console.log("negative")
    }
}

function loopNums(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

function reverseLoop(n) {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
}

function getInput(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "Stop") {
            return
        } else {
            console.log(arr[i]);
        }
    }
}

function reverse(arr) {
    let revArr = arr.reverse();
    console.log(revArr);
}
let nums = [4, 5 , 6];
let strings = ["Gosho", "Pesho", "Ivan", "Stop", "Kiro"];

console.log(numMultiply(nums[0]));
console.log(mupltipTwo(nums[0], nums[1]));
console.log(mupltipTwo(nums[0], nums[1]));
console.log(multDiv(nums[0], nums[1]));
console.log(multDiv(nums[1], nums[0]));
posOrNeg(nums);
loopNums(6)
reverseLoop(6)
getInput(strings)
reverse(strings)
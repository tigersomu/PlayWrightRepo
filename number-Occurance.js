var k = 2;
let noc = 0;
function numOccurred() {
    const numbers = [2, 4, 5, 2, 1, 2];
    // var k = 2;
    // console.log(numbers.length);
    // let noc = 0;
    for (i = 0; i <= numbers.length; i++) {
        if (k == numbers[i]) {
            noc = noc + 1
            //console.log(noc);
        }
    }
    console.log("The number " + k + " is occurred " + noc + " times");
}
numOccurred();

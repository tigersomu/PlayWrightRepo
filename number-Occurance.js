var k = 2;
let noc = 0;
function numOccurred() {
    const a=[2];
    const b=[3,1,2,5,2];
    const numbers = [2, 4, 5, 2, 1, 2,...a,...b];
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

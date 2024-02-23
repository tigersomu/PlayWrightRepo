const numbers = [2,4,5,2,1,2];
let k= 2;
// console.log(numbers.length);
let noc=0;
for(i=0;i<=numbers.length;i++){
    if(k==numbers[i]){
        noc=noc+1
    }
}
console.log("The number "+ k + " is occurred " + noc +" times");

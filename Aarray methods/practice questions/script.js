// Q.1 = check iff all numbers in our array  are multiple by 10 or not

// let num = [10,20,30] // agr ik bhe aise aa gaya jo 10 sa multiple n hua to falae aa jaye ga
// let multi = num.every((el) => el%2 == 0)
// console.log(multi)

// ***********************************************

// Q.2=  create a  function who find the minnumber of in our array

let num = [10,20,30,2,1]
function getMin(nums){
let min = num.reduce((min,el) => {
    if(min < el){
        return min;
    } else {
        return el;
    }
});
return min;
}
console.log(getMin(num))
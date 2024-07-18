// Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.



let myArr = [3,5,7,9,8,6,3,2]

let ans = myArr.reduce((accumulator,currentval)=>{
    return accumulator + currentval;
})

console.log(ans)
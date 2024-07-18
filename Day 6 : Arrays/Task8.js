// Task 8 : Use filter method to create new array with only even numbers and log the new array.

let arr = [ 3,4,6,8,0,9,4,2]


let ans = arr.filter((ele)=>{
    return ele%2==0;
})

console.log(ans)
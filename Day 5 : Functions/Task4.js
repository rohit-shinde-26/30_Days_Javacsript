// Task 4 : Write a function to concaniate two string and log result in console.

const concat = function(){
    let str1 ="Hello"
    let str2 = "Ram"

    // old way 
    console.log(str1 + " " + str2)

    // using string template
    console.log(`${str1} ${str2}`)

}
concat()
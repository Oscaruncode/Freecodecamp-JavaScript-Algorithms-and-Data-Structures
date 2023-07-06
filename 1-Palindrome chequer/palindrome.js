function palindrome(str) {

let cleanWord=str.replace(/\W+|_/g,"").toLowerCase();  //delete whitespaces and underscore. then transform the string to lowercase

let reverseStr=cleanWord.split("").reverse().join(""); //reverse the string 

return (reverseStr==cleanWord) ? true: false;   //check if the reverse word is equal to the original word, in case return true, if is false return false.
}

palindrome("Race car");
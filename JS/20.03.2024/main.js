
// 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]
// -----------------  SULUTION--------------
// function stringChop(str,num=null){
//     if(!num||num<=0) return [str];
//     const res=[];
//     for(let i=0;i<str.length;i+=num){
//         const slice=str.slice(i,i+num);
//         res.push(slice);
//     }    
//     return res
// }
// console.log(stringChop("w3resource")) // result: ["w3resource"]
// console.log(stringChop("w3resource",2) )// result: ["w3", "re", "so", "ur", "ce"]
// console.log(stringChop("w3resource",3)) // result: ["w3r", "eso", "urc", "e"]
//-------------------------------------------------------------------------------------------
// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

// function count(string,pattern){ 
//     const regExp =new RegExp(pattern,'gi')  
//     const arr=string.match(regExp);
//     return arr.length

// }
// count("The quick brown fox pattern jumps over the lazy dog", 'the');

//----------------------------------------------------------------------------------
// 16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

// function textTruncate(string,numb=null,end='...'){
//     if(!numb && numb!==0 || numb<0 ) return string;
//     const res=string.slice(0,numb);
//     return  res.length===string.length ? string : res+end
// }


// console.log(textTruncate('We are doing JS string exercises.')) // "We are doing JS string exercises."
// console.log(textTruncate('We are doing JS string exercises.',19)) // "We are doing JS ..."
// console.log(textTruncate('We are doing JS string exercises.',15,'!!')) // "We are doing JS !!"

//-------------------------------------------------------------------

// 19. Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the decimal version of the binary string.
// Test Data :
// (100) -> 19
// Explanation:
// Binary representation of 100 is 1100100  
// Reverse of 1100100 is 10011
// Decimal form of 10011 is 19
// (1134) -> 945
// Explanation:
// Binary representation of 1134 is 10001101110
// Reverse of 10001101110 is 1110110001
// Decimal form of 1110110001 is 945
 
// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.slice(1)) + str.charAt(0);
//   }
// function reverses(num){    
//     const binary=num.toString(2); //1100100
//     const revers=reverseString(binary); // 0010011
//     const result=parseInt(revers, 2);
//    return result;
// }
// reverses(1134);

//-------------------------------------------------------------------

// 21. Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"



//   function repeatString(str,num){
//     if(!num || num<0) return '';
//     let res=''
//     for(let i=0;i<num; i++){
//         res+=str
//     }
//     return res;
//   }
//   console.log(repeatString('hello',0));

//--------------------------------------------------------

// 22. Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E'));
// Output :
// "xercises"

// function subStrAfterChars(text,char){
//     return text.slice(text.indexOf(char)+1);
// }

// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E'));

// const a='  hello  ';

// console.log(a.trimEnd())

//-------------------------------------------------------------

// 24. Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// // console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// // Output :
// // "The quick brown fox"

// function truncate(str,num){
//     if(!num && num!==0 || num<0) return //new TypeError('second paramerter must be positiv integer');
//    return str.split(' ').slice(0,num).join(' ');
// }
   
// console.log(truncate('The quick brown fox jumps over the lazy dog', -1))
//---------------------------------------
// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"
// Click me to see the solution.

// 27. Write a JavaScript function to
 
function removeOccurrence(str,pattern){
    const regExp= new RegExp(pattern,'ig')
    return str.replaceAll(pattern)
}
console.log(removeOccurrence("The quick brown fox jumps over the lazy dog", 'the'))
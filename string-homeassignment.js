/* Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */

let s= "abhishek started going to school at the age of 6 years in Vidyalaya"
let splitWord= s.split(" ")

console.log(splitWord)
let len = splitWord.length
console.log(len)
console.log(splitWord[len-1])
lastWordLength = splitWord[len-1].length
console.log(lastWordLength)


/*Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length */


function example2 (x){

let y=x.trim()
console.log(y)
let splitWord= y.split(" ")
console.log(splitWord)
let len = splitWord.length
console.log(len)
console.log(splitWord[len-1])
lastWordLength = splitWord[len-1].length
console.log(`the last word is "${splitWord[len-1]}" with length of ${lastWordLength}`)
return lastWordLength
}
example2(" fly me to the moon ")


/*Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result*/

//let word1= "aBhishek"
//let word2= "haibeKsh"
function anagram(word1,word2){
let lowerWord1=word1.toLowerCase()
let lowerWord2=word2.toLowerCase()
console.log(`word1: ${lowerWord1} and word2: ${lowerWord2}`)
arrangeWord1= lowerWord1.split('').sort().join('')
console.log(arrangeWord1)
arrangeWord2= lowerWord2.split('').sort().join('')
console.log(arrangeWord2)
if (arrangeWord1 == arrangeWord2){
    return true
    
}
else {return false}

}
console.log(anagram("aBhishek","haieKsh"))
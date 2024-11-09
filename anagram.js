/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
*/

function checkStringsAnagram(a, b)
{
  let len1 = a.length;
  let len2 = b.length;
  
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');
  if(str1 === str2)
{
     console.log("True");
  } 
else 
{ 
     console.log("False");
  }
}
checkStringsAnagram("indian","indian")

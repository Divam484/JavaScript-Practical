

//===== 26.JavaScript Program to Check Whether a String is Palindrome or Not

function Palindrome(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    // console.log(reverse)   Reverse program
    if (reverse == str) {
      console.log(`${str} String is pelindrome`);
    } else {
      console.log(`${str} String  Not is pelindrome`);
    }
  }
  
  Palindrome("ABBA");
  
  //===== 27.JavaScript Program to Sort Words in Alphabetical Order
  
  function sortWord(str) {
    const words = str.split(" ");
    words.sort();
    console.log(`Sort Words in Alphabetical Order is :`);
    for (const element of words) {
      console.log(element);
    }
  }
  
  sortWord("i am divam patel");
  
  //===== 28.avaScript Program to Replace Characters of a String
  
  function replace(str) {
    const newString = str.replace("divam", "jay");
  
    console.log(newString);
  }
  
  replace("i am divam patel");
  
  //===== 29.JavaScript Program to Create Objects in Different Ways
  
  // function person(){
  
  // }
  // const person = new person();    // 1 Way
  
  // const person = {}               // 2 Way
  
  // const person = new Object ({})  // 3 Way
  
  //===== 30.JavaScript Program to Check the Number of Occurrences of a Character in the String
  
  function checkNum(str, letter) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == letter) {
        count += 1;
      }
    }
    console.log(`${letter} is occerences of ${count} times`);
  }
  checkNum("i am Divam  patel", "i");
  
  //===== 31.JavaScript Program to Convert the First Letter of a String into UpperCase
  
  function convertFirst(str) {
    let words = str.split(" ");
    let newSting = "";
    for (let element of words) {
      newSting += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    }
    return newSting;
  }
  
  console.log(convertFirst("i am divam"));
  
  //===== 32.JavaScript Program to Count the Number of Vowels in a String
  
  function countVowels(str) {
    let count = 0;
    let obj = {};
    let vowels = ["a", "e", "i", "o", "u"];
    for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
  
        if (obj.hasOwnProperty(letter)) {
          obj[letter] = obj[letter] + 1;
        } else {
          obj[letter] = 1;
        }
      }
    }
  
    let output = [];
  
    for (let key in obj) {
      let entry = {};
      entry[key] = obj[key];
      output.push(entry);
    }
  
    return output;
  }
  
  console.log(countVowels("i am divam"));
  
  //===== 33.remove property
  
  // Delete
  
  //===== 34.JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
  
  function checkstring(str) {
    if (str.startsWith("s") && str.endsWith("g")) {
      console.log("this exist");
    } else if (str.startsWith("s")) {
      console.log("start exist but end not");
    } else if (str.endsWith("g")) {
      console.log("end exist but start not");
    } else {
      console.log("not both exist");
    }
  }
  
  checkstring("skjsik rtg");
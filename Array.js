

//====== 35.JavaScript Program to Loop Through an Object

function loop(obj) {
    let part = "";
    for (let key in obj) {
      part += obj[key];
    }
    console.log(part);
  }
  
  let Obj = {
    welcome: "hello",
    name: "divam",
  };
  loop(Obj);
  
  //====== 36.JavaScript Program to Merge Property of Two Objects
  
  function merge(A, B) {
    const newObj = Object.assign(A, B);
    console.log(newObj);
  }
  
  // object 1
  const person = {
    name: "Jack",
    age: 26,
  };
  // object 2
  const student = {
    gender: "male",
  };
  merge(person, student);
  
  //====== 37.JavaScript Program to Add Key/Value Pair to an Object
  
  let person1 = {
    name: "Jack",
    age: 26,
  };
  
  person1.gender = "male";
  
  console.log(person1);
  
  //====== 38.JavaScript Program to Convert Objects to Strings
  
  let person2 = {
    name: "Jack",
    age: 26,
  };
  
  // let string = JSON.stringify(person1);
  const result1 = String(person2);
  console.log(typeof result1);
  
  //=====  39.JavaScript Program to Compare Two Strings
  
  function compare(str, str1) {
    if (str.toUpperCase() === str1.toUpperCase()) {
      console.log("stings are same");
    } else {
      console.log("stings are Not same");
    }
  }
  
  let str = "string";
  let str1 = "strIng";
  compare(str, str1);
  
  //===== 40.JavaScript Program to Encode a String to Base64
  
  function encode(str) {
    // const encode = window.btoa(str);
    console.log(encode);
  }
  
  encode("Learning JavaScript");
  
  //====== 41.JavaScript Program to Check Leap Year
  
  function checkleapyear(year) {
    // const leapyear = new Date(year,1,29).getDate() === 29;
  
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      // if(leapyear){
      console.log("this is leap year");
    } else {
      console.log("this is not leap year");
    }
  }
  
  checkleapyear(2019);
  
  //===== 42.JavaScript Program to Remove Specific Item From an Array
  
  function removeitem(Arr, n) {
    const newArry = [];
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] !== n) {
        newArry.push(Arr[i]);
      }
    }
    console.log(newArry);
  }
  
  removeitem(["a", "b", "c", "e"], "e");
  
  //===== 43.JavaScript Program to Check if An Array Contains a Specified Value
  
  function checkValue(Arr, n) {
    let contain = false;
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] == n) {
        contain = true;
      }
    }
    if (contain) {
      console.log("Yes Contain");
    } else {
      console.log("Not Contain");
    }
  }
  
  checkValue(["a", "b", "c", "e"], "i");
  
  //===== 44.JavaScript Program to Insert Item in an Array
  
  function checkValu(Arr, n) {
    // Arr.push(n)
    // Arr.unshift(n)
  
    // Arr[4] = Arr[3]
    // Arr[3] = n
    console.log(Arr);
  }
  
  checkValu(["a", "b", "c", "e"], "d");
  
  //=====  45.JavaScript Program to Append an Object to An Array
  
  function AddObj(Arr, Obj) {
    Arr.push(Obj);
    console.log(Arr);
  }
  
  let Obje = {
    i: "i",
    o: "o",
  };
  AddObj(["a", "b", "c", "e"], Obje);
  
  //===== 46.JavaScript Program to Remove Duplicates From Array
  
  function remove(Arr) {
    let newar = [];
    for (let key of Arr) {
      if (newar.indexOf(key) === -1) {
        newar.push(key);
      }
    }
    console.log(newar);
  }
  const array = [1, 2, 3, 2, 3];
  
  remove(array);
  
  //===== 47.JavaScript Program to Merge Two Arrays and Remove Duplicate Items
  
  function mergeArray(Arr, Arr1) {
    let newArr = Arr.concat(Arr1);
    let MergeArr = [];
    for (let key of newArr) {
      if (MergeArr.indexOf(key) === -1) {
        MergeArr.push(key);
      }
    }
    console.log(MergeArr);
  }
  let Arr = [1, 2, 3, 4, 5];
  let Arr1 = [4, 5, 6, 7, 8];
  mergeArray(Arr, Arr1);
  
  //===== 48.JavaScript Program to Sort Array of Objects by Property Values
  
  // program to sort array by property name
  
  function compareAge(a, b) {
    return a.age - b.age;
  } // Sort By Age
  
  const studentsS = [
    { name: "Sara", age: 24 },
    { name: "John", age: 22 },
    { name: "Jack", age: 27 },
  ];
  
  console.log(studentsS.sort(compareAge));
  
  // program to sort array by property name
  
  function compareName(a, b) {
    // converting to uppercase to have case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
  
    let comparison = 0;
  
    if (name1 > name2) {
      // Sort By name
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }
  
  const students = [
    { name: "Sara", age: 24 },
    { name: "John", age: 24 },
    { name: "Jack", age: 25 },
  ];
  
  console.log(students.sort(compareName));
  
  //====== 49.JavaScript Program to Compare Elements of Two Arrays
  
  function compareArr(Arr, Arr1) {
    const result = JSON.stringify(Arr) == JSON.stringify(Arr1);
    if (result) {
      console.log("Same element");
    } else {
      console.log("not same");
    }
  }
  
  const array1 = [1, 3, 8];
  const array2 = [1, 3, 5, 8];
  
  compareArr(array1, array2);
  
  //===== 50.JavaScript Program To Perform Intersection Between Two Arrays
  
  function Interation(Arr, Arr1) {
    let SetA = new Set(Arr);
    let SetB = new Set(Arr1);
    let neww = [];
    for (let i of SetB) {
      if (SetA.has(i)) {
        neww.push(i);
      }
    }
    console.log(neww);
  }
  const array5 = [1, 3, 8];
  const array4 = [1, 3, 5, 8];
  
  Interation(array5, array4);
  
  //====== 51.JavaScript Program to Split Array into Smaller Chunks
  
  function SplitArr(Arr, chunk) {
    for (let i = 0; i < Arr.length; i += chunk) {
      let temp;
      temp = Arr.slice(i, i + chunk);
      console.log(temp);
    }
  }
  
  let Arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
  
  SplitArr(Arr2, 3);
  
  //============================== 52.print second largest number in arr
  function secondLarge(input) {
    let arr = input.sort((a, b) => a - b);
    let res = arr[arr.length - 2];
    // for (let i = arr.length - 2; i >= 0; i--) {
    //   if (res != input[i]) {
    //     res = input[i];
    //     break;
    //   }
    // }
    return res;
  }
  
  const input = [1, 2, -2, 11, 7, 1];
  console.log(secondLarge(input));
  
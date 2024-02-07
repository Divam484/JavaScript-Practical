//====== 1. JavaScript Program To Print Hello World

function print() {
    console.log("hello world");
  }
  print();
  
  //====== 2.JavaScript Program to Add Two Numbers
  
  function addnum(A, B) {
    console.log(`Sum of ${A} , ${B} is `, A + B);
  }
  addnum(2, 3);
  
  //===== 3.JavaScript Program to Find the Square Root
  
  function SquareRoot(A) {
    //== 1 Way console.log(`SquareRoot of ${A} is`,Math.sqrt(A))
    //== 2 Way
    let square_root = A / 2;
    let temp = 0;
    while (square_root != temp) {
      temp = square_root;
  
      // smalling the square_root value to find the square root
      square_root = (A / square_root + square_root) / 2;
    }
  
    console.log(`SquareRoot of ${A} is`, square_root);
  }
  
  SquareRoot(64);
  
  //===== 4.JavaScript Program to Calculate the Area of a Triangle
  
  function AreaOfTriangle(A, B, C) {
    //== 1 Way  console.log(`AreaOfTriangle is : `, (B * H) / 2);
    //== 2 Way
    let s = (A + B + C) / 2;
    let area = Math.sqrt(s * (s - A) * (s - B) * (s - C));
    console.log(`AreaOfTriangle is : `, area);
  }
  
  AreaOfTriangle(3, 4, 5);
  
  //===== 5.JavaScript Program to Swap Two Variables
  
  function Swap(A, B) {
    console.log(`The value of  A is `, A);
    console.log(`The value of B is `, B);
  
    //   let temp;
    //   temp = A;
    //   A = B;
    //   B = temp;
    [A, B] = [B, A];
  
    console.log(`The value of after swapping: A is `, A);
    console.log(`The value of after swapping: B is `, B);
  }
  
  Swap(2, 4);
  
  //===== 6.Javascript Program to Solve Quadratic Equation
  
  // Function to solve quadratic equation
  // function solveQuadratic(a, b, c) {
  //     // Calculate the discriminant
  //     let discriminant = b * b - 4 * a * c;
  
  //     // Check if the discriminant is positive, negative, or zero
  //     if (discriminant > 0) {
  //         // Two real and distinct roots
  //         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  //         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  //         return [root1, root2];
  //     } else if (discriminant === 0) {
  //         // One real root (double root)
  //         let root = -b / (2 * a);
  //         return [root];
  //     } else {
  //         // Complex roots (discriminant is negative)
  //         let realPart = -b / (2 * a);
  //         let imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
  //         return [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`];
  //     }
  // }
  
  // // Example usage
  // let a = 1;
  // let b = -3;
  // let c = 2;
  
  // let roots = solveQuadratic(a, b, c);
  // console.log('Roots:', roots);
  
  //===== 7.JavaScript Program to Convert Kilometers to Miles
  
  function ConvertKmToMile(Km) {
    let mile = Km * 0.621371;
    console.log(`${Km} km  = ${mile} mile `);
    // let Km = mile / 0.621371
  }
  
  ConvertKmToMile(40);
  
  //===== 8.Javascript Program to Convert Celsius to Fahrenheit
  
  function ConvertCcToFahrenheit(Cc) {
    let Fahrenheit = Cc * 1.8 + 32;
    console.log(`${Cc} Celsius  = ${Fahrenheit} Fahrenheit `);
    // let Celsius =  (Fahrenheit - 32) / 1.8
  }
  
  ConvertCcToFahrenheit(40);
  
  //===== 9.Javascript Program to Generate a Random Number
  
  function rendom() {
    console.log("This is Random Number :", Math.floor(10000 * Math.random()));
  }
  rendom();
  
  //===== 10.Javascript Program to Check if a number is Positive, Negative, or Zero
  
  function CheckNum(A) {
    if (A > 0) {
      console.log("A is Positive");
    } else if (A == 0) {
      console.log("A is Zero");
    } else {
      console.log("A is Negative");
    }
  }
  
  CheckNum(-21);
  
  //===== 11.Javascript Program to Check if a Number is Odd or Even
  
  function CheckOddOrEven(A) {
    if (A % 2 == 0) {
      console.log("A is Even");
    } else {
      console.log("A is Odd");
    }
  }
  CheckOddOrEven(80);
  
  //===== 12.JavaScript Program to Find the Largest Among Three Numbers
  
  function findlargestnum(A, B, C) {
    if (A >= B && A >= C) {
      console.log("A is largest");
    } else if (B >= A && B >= C) {
      console.log("B is largest");
    } else {
      console.log("C is largest");
    }
  }
  
  findlargestnum(2, 21, 23);
  
  //===== 13.JavaScript Program to Check Prime Number
  
  function CheckPrime(A) {
    let prime = true;
    if (A == 1) {
      console.log("A is 1 so not Prime Number");
    } else if (A > 1) {
      for (i = 2; i < A; i++) {
        if (A % i == 0) {
          prime = false;
          break;
        }
      }
      if (prime) {
        console.log("A is prime");
      } else {
        console.log("A is not prime");
      }
    } else {
      console.log("A is Negetive So It is Not Prime Number");
    }
  }
  
  CheckPrime(7);
  
  //===== 14.JavaScript Program to Print All Prime Numbers in an Interval
  
  function GetAllPrime(A, B) {
    if (A <= 2) {
      A = 2;
      if (B >= 2) {
        console.log(A);
        A++;
      }
    }
  
    if (A % 2 == 0) A++;
  
    for (i = A; i < B; i = i + 2) {
      let flag = 1;
      for (j = 2; j * j <= i; j++) {
        if (i % j == 0) {
          flag = 0;
          break;
        }
      }
      if (flag == 1) {
        if (i == 1) continue;
        else console.log(i);
      }
    }
  }
  GetAllPrime(2, 27);
  
  //===== 15. JavaScript Program to Find the Factorial of a Number
  
  function findFactorial(A) {
    if (A < 0) {
      console.log("A < 0 not factorial");
    } else if (A == 0) {
      console.log("A factorial :", A);
    } else {
      let fact = 1;
      for (let i = 1; i <= A; i++) {
        fact *= i;
      }
      console.log(`${A} factorial :`, fact);
    }
  }
  findFactorial(5);
  
  //===== 16. JavaScript Program to Display the Multiplication Table
  
  function Table(A) {
    for (let i = 1; i <= 10; i++) {
      const result = i * A;
      console.log(`${A} * ${i} = ${result}`);
    }
  }
  
  Table(2);
  
  //===== 17.JavaScript Program to Print the Fibonacci Sequence
  
  function Fibonacci(A) {
    let n1 = 0,
      n2 = 1,
      next;
    for (let i = 1; i <= A; i++) {
      console.log(n1);
      next = n1 + n2;
      n1 = n2;
      n2 = next;
    }
  }
  
  Fibonacci(6);
  
  //===== 18.JavaScript Program to Check Armstrong Number
  
  function CheckArmstrong(num) {
    let sum = 0;
    let temp = num;
    let numberOfDigits = num.toString().length;
  
    while (temp > 0) {
      let remainder = temp % 10;
      sum += remainder ** numberOfDigits;
      temp = parseInt(temp / 10);
    }
    if (sum == num) {
      console.log(`${num} is Armstrong Number`);
    } else {
      console.log(`${num} is  Not Armstrong Number`);
    }
  }
  CheckArmstrong(92727);
  
  //===== 19.JavaScript Program to Find Armstrong Number in an Interval
  
  function findArmStrongnum(A, B) {
    for (let i = A; i <= B; i++) {
      let sum = 0;
      let temp = i;
      let numberOfDigits = i.toString().length;
  
      while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10);
      }
      if (sum == i) {
        console.log(i);
      }
    }
  }
  
  findArmStrongnum(8, 1634);
  
  //===== 20.JavaScript Program to Make a Simple Calculator
  
  function Calculate(A, operator, B) {
    if (operator == "+") {
      console.log(A + B);
    } else if (operator == "-") {
      console.log(A - B);
    } else if (operator == "*") {
      console.log(A * B);
    } else if (operator == "/") {
      console.log(A / B);
    } else {
      console.log("nothing");
    }
  }
  
  Calculate(3, "*", 5);
  
  //===== 21.JavaScript Program to Find the Sum of Natural Numbers
  
  function sumNatural(A) {
    let sum = 0;
    for (let i = 1; i <= A; i++) {
      sum += i;
    }
    console.log(`sum of ${A} Natural Number is :`, sum);
  }
  
  sumNatural(100);
  
  //===== 22.JavaScript Program to Check if the Numbers Have Same Last Digit
  
  function CheckSameLastDigit(A, B, C) {
    let result1 = A % 10;
    let result2 = B % 10;
    let result3 = C % 10;
  
    if (result1 == result2 && result1 == result3) {
      console.log(`${A}, ${C} and ${B} have the same last digit.`);
    } else {
      console.log(`${A}, ${B} and ${C} have the  NOt same last digit.`);
    }
  }
  
  CheckSameLastDigit(4, 24, 34);
  
  //====== 23.JavaScript Program to Find HCF or GCD
  
  function HCf(A, B) {
    let hcf;
    for (let i = 0; i <= A && i <= B; i++) {
      if (A % i == 0 && B % i == 0) {
        hcf = i;
      }
    }
  
    console.log(`${A}, ${B}  HCF Or GCD is :`, hcf);
  }
  
  HCf(60, 72);
  
  //===== 24.JavaScript Program to Find lcm
  
  function LCM(A, B) {
    let hcf;
    for (let i = 0; i <= A && i <= B; i++) {
      if (A % i == 0 && B % i == 0) {
        hcf = i;
      }
    }
  
    let LCM = (A * B) / hcf;
    console.log(`${A}, ${B}  LCM :`, LCM);
  }
  
  LCM(6, 8);
  
  //===== 25.JavaScript Program to Find Factorial of Number Using Recursion
  
  function Factorial(A) {
    if (A == 0) {
      return 1;
    } else {
      return A * Factorial(A - 1);
    }
  }
  
  let A = 3;
  
  if (A >= 0) {
    const result = Factorial(A);
    console.log(`The factorial of ${A} is ${result}`);
  } else {
    console.log("Enter Positive Number");
  }
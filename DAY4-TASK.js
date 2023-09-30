
// 1. Do the below programs in anonymous function & IIFE

// (a)

//Print odd numbers in an array

//programs in anonymous function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evennumber=numbers.filter(numbers => {
    return numbers%2===0
})

console.log(evennumber)



//PROGRAM IN IIFE function

(function() {
    let number=[1,2,3,4,5,6,7,8,9,10];

    for( let i=0;i<number.length; i++) {
        if(number[i]%2===0){
            console.log(number[i])
        }
        
    }

    // console.log(number.map((number) => number%2==0))
})()



//////////////////////////////////////////////////////////////////////////////////////

// (b)

// Convert all the strings to title caps in a string array

//programs in anonymous function


let toTitleCase = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const fruits = ["apple", "orange", "grapes"];
  
  const titleCapsFruits = fruits.map(toTitleCase);
  
  console.log(titleCapsFruits);


//   PROGRAM IN IIFE function



const fruits = ["apple", "orange", "grapes"];

const titleCapsFruits = (function(array) {
  function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return array.map(function(str) {
    return toTitleCase(str);
});
})(fruits);
console.log(titleCapsFruits);

///////////////////////////////////////////////////////////////////

// (c)
// Sum of all numbers in an array

//programs in anonymous function


const numbers = [1, 2, 3, 4, 5];

const sum = (function(array) {
      let total = 0;
  array.forEach(function(num) {
        total += num;
      });
  return total;
})(numbers);

console.log(sum);    


////////////////////////////////////////////////////////////////

// (d)

// Return all the prime numbers in an array


//programs in anonymous function


function filterPrimes(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
filterPrimes(numbers);



//   PROGRAM IN IIFE function

 
    (function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([2, 3, 4, 5, 6, 7, 8, 9, 10])

////////////////////////////////////////////////////////////////
 
// 2. Do the below programs in arrow functions.
// (a)

// Return all the prime numbers in an array

//programs in arrow function


const oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
         const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
         oddNumbers(array)



// (b)

// Return all the prime numbers in an array

//programs in arrow function
       
const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  } 

  const str = "hello world of programming";
  titleCase(str)

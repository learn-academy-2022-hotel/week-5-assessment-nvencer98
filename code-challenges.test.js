// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// CODE STARTS HERE

// describe("codemachine", () => {
//     it("returns coded words", () => {
//       expect(codeMachine(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     })
//   })
//   describe("codemachine", () => {
//     it("returns coded words", () => {
//       expect(codeMachine(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     })
//   })
//   describe("codemachine", () => {
//     it("returns coded words", () => {
//       expect(codeMachine(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
//   })



// const codeMachine = (value) => {
// const coded = value.replace(/a/gi,"4").replace(/i/gi,"1").replace(/o/gi,"0").replace(/e/gi,"3")
// return coded
// }
// console.log(codeMachine(secretCodeWord1))
// console.log(codeMachine(secretCodeWord2))
// console.log(codeMachine(secretCodeWord3))



// CODE ENDS HERE!!



// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// psudeo code:
// input: array and single letter
// output array of words containing letter 
// create function, filter the array to find letter , identify which strings include the letter, return those in new array. 

// CODE STARTS HERE

// describe("finder", () => {
//     it("returns words with letter", () => {
//       expect(finder(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
//     })
//   })
//   describe("finder", () => {
//     it("returns words with letter", () => {
//       expect(finder(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
//   })
 



// const finder = (array,letter) =>{
//  return array.filter((array) => array.toLowerCase().includes(letter))


// }
// console.log(finder(fruitArray,letterA))
// console.log(finder(fruitArray,letterE))


// CODE ENDS HERE 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// psudeo code: 
// INPUT: ARRAY
//OUTPUT: boolean true or false.
// creat functin that takes in array, identifies like numbers, split array into 2 arrays, if 2 arrays equal a pair of 3 and pair of 2 return true, else return false. 


describe("fullHouse", () => {
    it("returns if a full house", () => {
      expect(fullHouse(hand1)).toEqual(true)
    })
  })
  describe("fullHouse", () => {
    it("returns if a full house", () => {
      expect(fullHouse(hand2)).toEqual(false)
    })
  })
  describe("fullHouse", () => {
    it("returns if a full house", () => {
      expect(fullHouse(hand3)).toEqual(false)
    })
  })
  describe("fullHouse", () => {
    it("returns if a full house", () => {
      expect(fullHouse(hand4)).toEqual(true)
    })
  })





const fullHouse = (arr) => {
  let set1 = arr.filter(value => value === arr[0])
  let secondM = arr.find(value => value !== arr[0])
  let set2 = arr.filter(value => value === secondM)
  return (set1.length === 2 && set2.length === 3) || (set1.length ===3 && set2.length === 2) ?
true : false  
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))
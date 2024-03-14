// First let's see how to make an empty set without any arguments:
const mySet1 = new Set();

// Pass iterable objects (like this array) into Set() to create a Set which contains the unique elements of that iterable:
const myArray = [1, 2, 2, 3, 3, 4, 5];
const uniqueSet = new Set(myArray);
console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }
// See that 2 and 3 are repeated in myArray but Set() only takes the unique elements { 1, 2, 3, 4, 5 }

// We can add elements into a Set using .add()
const mySet2 = new Set();
console.log("Test 2:", mySet2)
mySet2.add(1);
mySet2.add(2);
mySet2.add(3);
console.log("Test 2 end:", mySet2); // Output: Set { 1, 2, 3 }
// Size is included in all of these but is not normally
// This may be due to an extension in the IDE

// We can use this to see if an elements have been repeated or if all are unique as well.
const myString = "hello";
const uniqueChars = new Set(myString);
console.log("Test 3: ", uniqueChars);


// Sometimes we will need to check if an element exists in a set using .has()
const mySet3 = new Set([1, 2, 3, 4, 5]);
console.log("Test 4.1:", mySet3.has(2));    //true
console.log("Test 4.2:", mySet3.has(4));    //true
console.log("Test 4.3:", mySet3.has(6));    //false
console.log("Test 4.4:", mySet3.has(8));    //false
// We do not return the entire set, only if the set has the input as an element
const mySetRepeat = new Set([1, 2, 2, 3, 4, 5]);
console.log("Test 5.1:", mySetRepeat.has(2));    //true
// Even repeated values do not post issue. They still exist, so the Set() .has() is
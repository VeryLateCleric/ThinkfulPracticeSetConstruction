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



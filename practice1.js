// First let's see how to make an empty set without any arguments:
const mySet1 = new Set();

// Pass iterable objects (like this array) into Set() to create a Set which contains the unique elements of that iterable:
const myArray = [1, 2, 2, 3, 3, 4, 5];
const uniqueSet = new Set(myArray);
// console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }
// See that 2 and 3 are repeated in myArray but Set() only takes the unique elements { 1, 2, 3, 4, 5 }

// We can add elements into a Set using .add()
const mySet2 = new Set();
console.log("Test 2:", mySet2)
mySet2.add(1);
mySet2.add(2);
mySet2.add(3);
console.log("Test 2 end:", Array(mySet2)); // Output: Set { 1, 2, 3 }
// Size is an inherent property of each Set 
// This may be due to an extension in the IDE

// We can use this to see if an elements have been repeated or if all are unique as well.
const myString = `Hello`;
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

// We can remove an elements using .delete()
const mySet4 = new Set([1, 2, 3, 4]);
mySet4.delete(3);
console.log(mySet4)
// Since we still are returning the size quality of the set, pay special attention to which numbers are still in the set.
const mySetDelete = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
mySetDelete.delete(1, 2, 3, 4, 5, 6, 7);
console.log("Test 6", mySetDelete);
// Notice here the output seems like it would be {8} but .delete does not remove the items after the first.
// So size will be 7 and mySetDelete will return [2, 3, 4, 5, 6, 7, 8]

// Suppose we want to delete a few things then?
const mySet5 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]); // The original set
const elementsToDelete = new Set([2, 4, 9, 1]); // Set which defines what numbers are removed
const keepSet = new Set(); // New set to .add the numbers into

for (const element of mySet5) {
    if (!elementsToDelete.has(element)) {
        keepSet.add(element)
    }
}
console.log("Test 7", keepSet)


// We can also loop over the elements of the Set with either forEach() or a `for...of` loop
const mySet6 = new Set([1, 2, 3]);
mySet6.forEach(value => {
    console.log(value);
});


// Now that we can remove multiples, let's try removing duplicates from an array
const arrayWithDuplicates = [1, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 8, 8, 9, 10];
const uniqueArray = [...new Set(arrayWithDuplicates)]; //Using '...' spread operator to spread the elements of arrayWithDuplicates
// This will allow the new uniqueArray to contain each of the unique elements
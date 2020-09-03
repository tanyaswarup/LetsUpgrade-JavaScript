// question 1 : Program to search a particular character in string
let name = "tanyaSwarup";
let index = `character n found in string ${name} at index ${name.search("n")} (index starting from 0)`;
console.log(index);
let index1 = "character w found in string"+" "+name+" "+"at index"+" "+(name.search("w"));
console.log(index1);
console.log(name.search("a"));
console.log("\n");

// question 2 : Program to convert minutes to seconds
let min = 2;
let sec = `${min} minutes = ${min*60} seconds`;
console.log(sec);
console.log("\n");

// question 3 : Program to search for an element in array of strings
let arrayOfStrings = ["omi", "tanya", "priyanka", "aastha", "khushi", "sanya", "nivi"];
let index2 = `element khushi exists in the array at index ${arrayOfStrings.indexOf("khushi")}`;
console.log(index2);
console.log("\n");

// question 4 : Program to display only elements containing 'a' in them from an array
let array2 = [];
let temp;
for(let i=0; i<arrayOfStrings.length; i++)
    {   temp = arrayOfStrings[i];
        if(temp.includes("a") == true){
               array2.push(temp);
        }
        temp = null;
    }
console.log("elemts containing a are: " + array2 )
console.log("\n");


// question 5 : Program to print array in reverse order
console.log("array is: " + arrayOfStrings)
let reverseArray = `Array in reverse: ${arrayOfStrings.reverse()}`;
console.log(reverseArray);

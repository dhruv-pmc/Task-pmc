const allDiv = document.getElementsByTagName('div');

let animals1 = ["Cow","Horse","Elephant","Cat"];
let animals2 = ["Lion","Tiger","Snake"];
let num3 = [1,2,3,4,5];

//Array Concate
console.log(animals1.concat(animals2));
// ['Cow', 'Horse', 'Elephant', 'Cat', 'Lion', 'Tiger', 'Snake']

console.log(animals1.concat(animals2,num3));
//['Cow', 'Horse', 'Elephant', 'Cat', 'Lion', 'Tiger', 'Snake', 1, 2, 3, 4, 5] 

let stringArray = [ 'eat', 'work', 'sleep','work', 'exercise', 1, true];

//Array copyWithin
console.log(stringArray.copyWithin(2,0));
//  ['eat', 'work', 'eat', 'work', 'sleep', 'work', 'exercise']

stringArray = [ 'eat', 'work', 'sleep','work', 'exercise'];
console.log(stringArray.copyWithin(2,0,2));
// ['eat', 'work', 'eat', 'work', 'exercise']

//Array Entries
for (let x of stringArray.entries()) {
    console.log(x);
  }
//   [0, 'eat']
//   [1, 'work']
//   [2, 'eat']
//   [3, 'work']
//   [4, 'exercise']

const prices = [80,66,94,100,62,14,23,54];

//Array Every
console.log(prices.every((price)=>{
    return price <100;
}));
// false

//Array Find
const arr = ['Cow', 'Horse', 'Elephant', 'Cat', 'Lion', 'Tiger', 'Snake'];
console.log(arr.fill("Dog"));
// ['Dog', 'Dog', 'Dog', 'Dog', 'Dog', 'Dog', 'Dog']
console.log(arr.fill("B",1,4)) ;
// ['Dog', 'B', 'B', 'B', 'Dog', 'Dog', 'Dog']

//Array Filter
const mark = [32, 33, 16, 40];
const result = mark.filter(checkMark);
console.log(result)
// [33, 40]
function checkMark(mark) {
  return mark >= 33;
}

//Array Find
console.log(mark.find(checkMark));
// 33

//Array FindIndex
console.log(mark.findIndex(checkMark));
// 1

//Array For Each
let marks = "";
mark.forEach((mrk)=>{
    marks += mrk + " Mark ," + " ";
});

console.log(marks);
// 32 Mark , 33 Mark , 16 Mark , 40 Mark , 

//Array From
console.log(Array.from("ABCDEFG"));
// ['A', 'B', 'C', 'D', 'E', 'F', 'G']

//Array includes
const alpha = ["c","a","b","c","b"]
console.log(alpha.includes("a"));
// true
console.log(alpha.includes("a",3));
// false

//Array indexOf
console.log(alpha.indexOf("b"));
// 2
console.log(alpha.indexOf("b",3));
// 4

//Array isArray
console.log(Array.isArray(alpha));
// true
console.log(Array.isArray("alpha"));
// false

//Array Join
console.log(alpha.join());
// c,a,b,c,b




//Array keys
const keys = alpha.keys();

let text = "";
for (let x of keys) {
  text += x + " ";
}
console.log(text);
// 0 1 2 3 4 

const keys1 = Object.keys(alpha);

text = "";
for (let x of keys1) {
    text += x + " ";
}
console.log(text);
// 0 1 2 3 4 

//Array length
console.log(alpha.length);
// 5




/*The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything. You can use the forEach method to mutate the source array, but this isn't really the way it's meant to be used */

//Array map
let mapp = arr.map((anim)=>anim + " is a animal" );
console.log(mapp);
// ['Dog is a animal', 'B is a animal', 'B is a animal', 'B is a animal', 'Dog is a animal', 'Dog is a animal', 'Dog is a animal']

//Array pop
console.log("the new array length after removing " + alpha.pop() + " is " + alpha.length);
// the new array length after removing b is 4

//Array prototype
Array.prototype.checkResult = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = (this[i] >=33)?"Pass":"Fail" ;
    }
  };

mark.checkResult();
console.log(mark);
// ['Fail', 'Pass', 'Fail', 'Pass']


console.log("the new length after pushing rat is " + animals2.push("rat"));
// the new length after pushing rat is 4


//Array Reduce
const name1 = ["Dhruv", "Atishkumar", "Dalal"];

console.log("Full Name is " + name1.reduce(myFunc)); 
// Full Name is Dhruv Atishkumar Dalal
function myFunc(total, num) {
    return total +" " + num;
  }

console.log(alpha.join(" 'ke baad' "));
// c 'ke baad' a 'ke baad' b 'ke baad' c 'ke baad' b



//Array rightReduce
//same as Array reduce but starts from end
console.log("Full Name is " + name1.reduceRight(myFunc)); 
// Full Name is Dalal Atishkumar Dhruv

//array reverese
console.log(animals2);
// ['Lion', 'Tiger', 'Snake', 'rat']

animals2.reverse();
console.log(animals2);
// ['rat', 'Snake', 'Tiger', 'Lion']

// array shift
animals1.shift();
console.log(animals1);
// ['Horse', 'Elephant', 'Cat']

//Array slice
console.log(arr.slice(3,6));
// ['B', 'Dog', 'Dog']

const data = [18,22,28,34];

//Array Find
console.log(data.some(checkMark));
// true

//Array sort
alpha.sort();
console.log(alpha);
// ['a', 'b', 'c', 'c']

//Array splice
animals1.splice(0,2,"Pig","Monkey");
console.log(animals1);
// ['Pig', 'Monkey', 'Cat']

//Array toString
console.log(animals1.toString());
// Pig,Monkey,Cat

//Array unshift
animals1.unshift("cow","Elephant");
console.log(animals1);
// ['cow', 'Elephant', 'Pig', 'Monkey', 'Cat']

//Array valueOf
console.log(animals1.valueOf());
// ['cow', 'Elephant', 'Pig', 'Monkey', 'Cat']

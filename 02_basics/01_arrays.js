//array
// for array we use square brackets
//array can store diiferent types of elemesnts at a time 
//we can read documentation of this topic AT MDN website
const myArr =[1,2,3,4,5,6,]

//note important thing is here is 
 
//java Script arrays are resizable and can contain a mix of diiferent data types 

// array elemnts cannot be accessed using arbitrary strings as indexes 
console.log(myArr["one"]);//not possible
//by gaving the appropriate index address it wiil provide us the exact element of that particular index
console.log(myArr[0]);// this is the right way of doing

//another features of arrays in java script when we make copies of an array 
//it create shallow copies 
/*a shallow copies of an object is a copy whose properties share the same reference (point to the same underlying alues) as thodse
of the source object from which the copy was made*/

//another way of declaring array
//new is a keyword here 
const myarr2 = new Array(1,2,3,4,5)
console.log(myarr2[1]);

//Methods of Array
myarr2.push(9);//push method is used to add a new element in the array
console.log(myarr2);
 
myarr2.pop(3);// pop method is used to remove the last element of the array
console.log(myarr2)

myarr2.unshift(6)// it is used to shift  the  elements and add the element in the  starting
/*OUTPUT OF UNSHIFT METHOD IS [6,1,2,3,4,5] */
myarr2.shift()
/*OUTPUT OF SHIFT METHOD IS [1,2,3,4,5] 
because shift element will remove 1 elemet shift towards left hand side*/
console.log(myarr2);

//now some questioning methods of array\
 
console.log(myarr2.includes(12));//Is the array is containing 4 or not 

// .join method is used to add to different arrays
const addArr =myArr.join(11,55,66);
console.log(addArr)

//slice ,splice
console.log("A",myArr)
const myn1 =myArr.slice(1,3);
console.log(myn1);// output  the myn1 contains only elements from index 1 to 3
/* after using slice method the original array remains the same no change in the original method*/
console.log("B",myArr); 

const myn2 = myArr.splice(1,4)
console.log(myn2)
console.log("c",myArr); /*The original array will be changed  after applying splice method*/









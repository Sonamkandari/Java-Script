//Primitive data type 
/* 7 types : String , Number , Booolean, null, undefined,symbol,BigInt*/

//Reference type or non premitive data type
//Aray , Objects, Functions

const score =100
const scoreValue =10.78
const outside=null
let userEmail;//value is undefined

//symbols are useally used in front and liabraries

const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id == anotherID);//varification

//objects 

const heros = ["Doremon", "Ninja hatori","motu-patlu"];
let myObj ={
    name:"sonam",
    age:21,
}


const myFunction  = function(){
    console.log("Hello world");
    
}
 console.log(typeof bigNumber);// value is undefined


 //memory  in java script are of two types stack memory and heap memory
 
 //in all PRIMITIVE types(Stack)
 let myname ="Doremon ki Duniya"
 let anothername= myname
 anothername ="Mini Doremon"

 console.log(myname);
 console.log(anothername);


 let user1 ={
    email: "chola_allu@gmail.com",
    upi: "ruiweyriw"
 }
 
 let user2 = user1
 user2.email ="sonam@gmai.com"
 user2.upi ="yiuhn"

 console.log(user1.email);
 console.log(user2e.email);
 
 
 //in all NON-PRIMITIVE types(Heap)

 

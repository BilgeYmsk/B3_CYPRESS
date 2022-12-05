//creating array

var scores= new Array() //empty
var numbers= new Array(10) //array with initial size 10
var myNumbers=new Array(1,2,3,4) //array with initial elements

var sing=Array('Red') //array with one element
var athletes=Array(3) //array with initial size 3

var emptyArray=[]
var colors=['red',"green",'blue']

//array examples

let tools=['jest','selenium','cypress','testcafe','phantomjs','protractor']


//Accessing array elements

console.log(tools)

console.log(tools.toString()) 

console.log(tools[1])

const string=tools.toString()
console.log(string)

//add * between element join ile ekleme yapilabilir 
//add * with .join() method between arrays elements

const join=tools.join(' * ')
console.log(join)


//remove an element from the end of an arrays

const pop=tools.pop()
//console.log(pop)  //array in son elemanini yazdiriyor 
console.log(tools) //remove yapiyor

//array in en sonuna ekleyecek array element to end of array

const push=tools.push('SlimerJS')
// console.log(push)  // arrayin size ini yazdirdi 
console.log(tools)

//removes an element from the beginning of an arrays

const shift=tools.shift()
console.log(shift)
console.log(tools)

//add element to beginning of an array
const unshift=tools.unshift('Selenoid')
console.log(tools)
console.log(unshift)

//sort element
const sort=tools.sort()
console.log(tools)
console.log(sort)

//reverse element
const reverse=tools.reverse()
console.log(tools)
console.log(reverse)

//array foreach te kullanmak

tools.forEach((value)=>{
 if(value=='cypress'){
    console.log("cypress is trending")
 }else{
    console.log("element not found")
 }

})





























/*
 * Variable naming rules : Same as java
* Primitives Data Types
* numbers : 123,120.50
* String : 'apple'
* Boolean : true, false
* Undefined : variable does not have a value yet
* Null :
*/
/* 
* 3 farklı variable tipi vardır
*  var: En. variable kısaltılmış hali
*          * var ise globally-scope bir değişken tanımlama yöntemidir. 
*          * Değerini daha sonra değiştirebilir ve tekrar aynı değişkeni tanımlayabilirsiniz.
* 
*  let: En. let - yani Let is equal to .. yani değer ... eşit olsun
*          * let, block-scope bir değişken tanımlama yöntemidir.
*          * block dediğimiz yapılar ise küme parantezlerinin arasında kalan yerdir.
*          * let ile tanımlanan değişkenlerin değeri daha sonra değiştirilebilir 
*          * fakat aynı değişkeni tekrar tanımlayamazsınız.
* 
*  const: En. sabit anlamına gelen constant kısaltılmışı
*          değişkenin değeri sabit olur değimez Pi sayısı gibi
* 
*/

var name = 'Mike'
var age = 36;
var name_object = { firstname: 'Mike', lastname: 'master' }
var truth = true
var skills = ['HTML', 'CSS', 'JS']
var a = null;

//object
var student = {

    firstname: 'Jake',
    lastname: 'Masters',
    age: 30,
    height: 180,

    fullname: function () {
        return this.firstname + " " + this.lastname
    }

}

const ageValue = student.age

console.log(ageValue)
console.log(student.fullname)





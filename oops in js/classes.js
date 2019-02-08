/* function person(name,age)
{
    this.firstname=name.split(" ")[0];
    this.lastname=name.split(" ")[1];
    this.age=age;
    this.isadult=function(){return age>18}
}
let p=new person("john smith",30);
let q=new person("harry potter",43);
console.log(p.isadult()); // constructor
console.log(p); */

//concept of pvt and public
function person(name,age)
{
    this.firstname=name.split(" ")[0];
    this.lastname=name.split(" ")[1];
    let mage=age;
    this.isadult=function(){return mage>18}

}
let p=new person("john smith",30);
let q=new person("harry potter",43);
console.log(p.isadult()); // constructor
console.log(p);
// var
console.log("var");
var x=10;
function myfun()
{
    var x=20;
    x=x+1;
    console.log(x);
    if (true){var x=30;
    x=x+1;
console.log(x);}
console.log(x)
}
myfun();
console.log(x);
// let
console.log("let");
let a=10;
function myfun()
{
    let a=20;
    a=a+1;
    console.log(a);
    if (true){let a=30;
    x=x+1;
console.log(a);}
console.log(a)
}
myfun();
console.log(a);
let obj={
    a:10,
    b:"hello",
    c:true,
    d:{p:10,q:2,r:{x:"val"}
}
}
console.log(obj);
console.log(obj.a);
console.log(obj.d);
console.log(obj.d.r);
console.log(obj.d.r.x);
//add props in object
obj.e="yo";
console.log(obj);
obj.d.r.y="value";
console.log(obj);
//delete prop
delete obj.d.r.x;
console.log(obj);
function add(x,y)
{
    let sum=x+y;
    return sum;
}
let op1= add(4,3);
let op2= add("hello",1);//overloading
console.log(op1,op2);

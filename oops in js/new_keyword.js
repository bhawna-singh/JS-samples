// 1st way
function Fruit(color,taste)
{
    this.color=color;
    this.taste=taste;
}
let orange=new Fruit("orange","sour");
let apple=new Fruit("red","sweet");
let mango={color:"yellow",taste:"sweet"}
console.log(orange);
console.log(apple);
console.log(mango);
console.log(orange.color);
console.log(apple.taste);
console.log(mango.color);

// 2nd way
function fun()
{
    this.p="something";
    return 10;
}
let o1=fun();
let o2=new fun();
console.log(o1);
console.log(o2);
console.log(o1.p);
console.log(o2.p);
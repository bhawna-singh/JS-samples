let str="asdasdas";
console.log(str);
console.log(str.indexOf("a"));
console.log(console.log(str.indexOf("a",4)));
console.log(str.substr(3));
console.log(str.substr(3,5));
console.log(str.substring(3));
console.log(str.substring(3,5));
console.log(str.slice(4,5));
console.log(str.slice(-5,-3));
console.log(str.substring(-5,-3)); //doesn't work
console.log("HI".toLowerCase());
let url="https://www.youtube.com/watch?v=NHbZB3OrBxk&gclid=CjwKCAiAx4fhBRB6EiwA3cV4KhTNpdlp7vA7EtyrOSfZ-l5uO7ioM8KhsNS3bwIhEF2uRUFp2IZUrhoCAHkQAvD_BwE"
console.log(url.split('?'));
let arr=[1,2,3];//homogenous
console.log(arr);
let array=[1,2,3,"asd","fng",false,{a:10},[4,5],"yo"]; //heterogenous
console.log(array);
let aar=[[1,1],[2,2]]; //2d array
console.log(aar);
console.log(arr.join('-'));
console.log(array.slice(4,5));
console.log(array.splice(4,5));
array[10]=10;
console.log(array);
let p='bhawna'
let str23=`this is ${p}'s string`;
console.log(str23);
let notes=['do','re','mi','fa','so','la','ti','do'];
console.log(notes.slice(4));
console.log(notes.slice(4,6));
console.log(notes);
console.log(notes.splice(4));
console.log(notes.splice(0,3,'sa','re','ga'));
console.log(notes);
let fruits=['mango','orange','apple'];
fruits.push('kiwi');
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('papaya');
console.log(fruits);



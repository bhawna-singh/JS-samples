//sorting
let arr=[6,3,9,1,7,2,14,26,35];
function compare(a,b)
{
    return a-b;
}
let sortedarr=arr.sort(compare);
console.log(sortedarr);

//map
//let arr=[1,2,3,4,5];

let arr2=arr.map(function(item)
{return item*item;})
 console.log(arr2);

 //filter
//let arr=[1,2,3,4,5];
let arr3=arr.filter(function(value)
{return(value%3==0)})
console.log(arr3);

//reduce
let fact=arr.reduce(function(accum,item)
{return accum*item;})
console.log(fact);

let sum=arr.reduce(function(accum,item)
{return accum+item;})
console.log(sum);

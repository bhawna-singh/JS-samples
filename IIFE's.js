(function(){
    console.log("hello");
}) ();

//minimize line of codes

(function(l,p,r,s){
    l("3^4= "+p(3,4));
    l("4^2= "+p(4,2));
    l("root(2)= "+r(2));
    l("sin(10)= "+s(10));
}) (console.log,Math.pow,Math.sqrt,Math.sin);

//solving for loop problem

for(var i=0;i<10;i++)
{
    (function(j){
        setTimeout(function(){
            console.log(j)
        },100)
    }) (i);
}
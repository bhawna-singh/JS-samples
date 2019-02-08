function createcounter(initval,delta)
{
    let val=initval;
    let counter={incr:function(){val=val+delta;},
                 decr:function(){val=val-delta;},
                 show:function(){console.log(val)}}    

return counter; }     
let a=createcounter(50,5);
a.show();
a.incr();
a.incr();
a.show()

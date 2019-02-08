// func as an arg
function getfirstname(fullname)
{return fullname.split(" ")[0];}
function greeter(findname,fullname)
{
    let firstname=findname(fullname);
    console.log("hello",firstname);
}
greeter(getfirstname,"bhawna singh");
 // func returned
function creategreeter(name)
{
    let firstname=name.split(" ")[0];
    function greeter()
    {console.log("hello",firstname);}
    return greeter;
} 
let johngreeter=creategreeter("John Doe");
johngreeter();

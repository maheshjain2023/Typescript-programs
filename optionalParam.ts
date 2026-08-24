function add(x:number,y:number,z?:number)
{
    if(z!==undefined)
    {
        console.log("Addition is:",x+y+z);
    }
    else
    {
        console.log("Addition is:",x+y);
    }
}
add(10,20,30);
add(10,20);
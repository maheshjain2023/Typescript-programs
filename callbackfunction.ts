function abc(x:number,y:number,callback:any):void{
    console.log("Inside abc function");
    callback(x,y);

}
function add(x:number,y:number):void{
    console.log("Addition is:",x+y);
}
abc(10,20,add);


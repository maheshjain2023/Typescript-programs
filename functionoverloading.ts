function sum(a: number, b: number): number;
function sum(a:number,b:number,c:number):number;
function sum(a:number,b:number,c?:number):number{
    if(c!=undefined){
        return a+b+c;
    }
    else{
        return a+b;
    }
}
console.log("Sum of two numbers is:",sum(10,20));
console.log("Sum of three numbers is:",sum(10,20,30));
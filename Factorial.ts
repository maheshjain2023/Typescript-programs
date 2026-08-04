import promptSync from "prompt-sync";
const prompt = promptSync();
let x:number=Number(prompt("Enter a number to calculate its factorial: "));
let factorial:number=1;
for (let i=1;i<=x;i++){
    factorial=factorial*i;
}
console.log("Factorial for "+x+" is:" ,factorial);
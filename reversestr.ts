let str:string="Hello World";
let reversestr:string="";
for(let i=str.length-1;i>=0;i--)
{
    reversestr=reversestr+str[i];
}
console.log(reversestr);
export{};
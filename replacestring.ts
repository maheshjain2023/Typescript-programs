let str:string="banana";
let str2:string="";
for(let ch of str)
{
 if(ch=='a')
 {
    str2=str2+'*';
 }
 else
 {
    str2=str2+ch;
 }
}
console.log(str2);
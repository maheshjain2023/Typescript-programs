let str1:string="listen1";
let str2:string="silent";
if(str1.split("").sort().join("")===str2.split("").sort().join(""))
{
    console.log(str1 + " and " + str2 + " are anagrams");
}
else
{
    console.log(str1 + " and " + str2 + " are not anagrams");
}
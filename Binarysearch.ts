import promptsync from "prompt-sync"
const prompt=promptsync();

let arr:number[]=[10,20,30,40,50];
let search:number=Number(prompt("Enter element to search"));
let start:number=0;
let end:number=arr.length-1;
while(start<end)
{
    let mid:number=Math.floor(start+end)/2;
    if(arr[mid]===search)
    {
        console.log("Element found ");
        break;
    }
    else if(arr[mid]<search)
    {
        start=mid+1;
    }
}

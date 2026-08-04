import promptSync from "prompt-sync";

const prompt = promptSync();
let arr:number=[10,2,30,40,50];
let search:number=Number(prompt("Enter number to search"));
let found:boolean=false;
for(let i:number=0;i<arr.length;i++)
    {
        if(arr[i]===search)
        {
            console.log("Element found at index: "+i);
            found=true;
        break;
        }
        
    }
    if(found===false)
        {
            console.log("Element not found");
        }



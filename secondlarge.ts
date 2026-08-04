let arr:number[]=[10,20,30,40,50];
let largest:number=0;
let secondlargest:number=0;;
for(let i:number=0;i<arr.length;i++)
{
    if(arr[i]>largest)
    {
        secondlargest=largest;
        largest=arr[i];
    }
    
}
console.log("Largest number is: "+largest); 
    console.log("Second largest number is: "+secondlargest);
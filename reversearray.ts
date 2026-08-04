let arr:number=[10,2,30,40,50];
let start:number=0;
let end:number=arr.length-1;
while(start<end)
{
    let temp:number=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr);

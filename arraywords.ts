let fruits:string[]=["apple", "banana", "orange", "apple", "kiwi", "banana", "grape"];
let frequency: { [key: string]: number } = {};
for(let fruit of fruits)
{
    if(frequency[fruit])
    {
        frequency[fruit]++;
    }
    else
    {
        frequency[fruit]=1;
    }
}
        
for(let fruit in frequency)
{
    if(frequency[fruit]>1)
    {
        console.log(fruit+" : "+frequency[fruit]);
    }
}
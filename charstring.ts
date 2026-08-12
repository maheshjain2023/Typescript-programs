let str:string="Pragramming";
let frequency:{[key:string]:number}={};
for(let ch of str)
{
  if(frequency[ch])
  {
    frequency[ch]++;
  }
  else
  {
    frequency[ch]=1;
  }
}
for(let ch in frequency)
{
    if(frequency[ch]>1)
    {
        console.log(ch + ":" + frequency[ch])
    }
}

export{};
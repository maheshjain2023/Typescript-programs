let paragraph="Typescript is an easy language, typescript is a superset of JavaScript";
let frequency:{[key:string]:number}={ };
let words=paragraph
          .toLowerCase()
          .replace(/[.,!?]/g,"")
          .split(/\s+/);
for(let word of words)
{
  if(frequency[word])
   {
     frequency[word]++;
   }
   else
   {
     frequency[word]=1;
   }
}
for(let word in frequency)
{
   if(frequency[word]>1)
    {
     console.log(word + ":" +frequency[word]);
    }
}
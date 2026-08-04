let x:number[]=[5,9,2,7,1,6];
  const min=x[0];
for(let i=0;i<=x.length;i++)
{
for(let j=i+1;j<=x.length;j++)
{
 if(x[i] > x[j]) 
 {
    const min=x[i];
    x[i]=x[j];
    x[j]=min;

 }
}

}
console.log(x);
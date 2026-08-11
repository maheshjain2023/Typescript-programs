let paragraph:string="Typescript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static types, classes, and interfaces to JavaScript, allowing developers to catch errors early during development and improve code maintainability. With TypeScript, developers can write more robust and scalable applications while still leveraging the flexibility and ubiquity of JavaScript."
let words:string[]=paragraph
                .toLowerCase()
                 .replace(/[.,!?]/g,"")
                 .split(/\s+/);

let frequency: { [key: string]: number } = {};
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
                console.log(word+" : "+frequency[word]);
            }
        }
    
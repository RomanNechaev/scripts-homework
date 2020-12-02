let fs = require('fs');
let arg = process.argv;
let stack = new Array();
let text1 = fs.readFileSync('описание дуба.txt');
text1 = text1.toString();
let t = "дуб";
let tHash = 0;
let tempHash = 0;
stack1 = new Array;
for (let i = 0; i < t.length; i++)
	{
        tHash += t.charCodeAt(i)
        tempHash += text1.charCodeAt(i);
    }
for (let j = t.length; j < text1.length; j++)
    {
        tempHash = tempHash-text1.charCodeAt(j - t.length) + text1.charCodeAt(j);
        if (tHash == tempHash)
        {
            flag = false;
            for (let i = 0; i < t.length; i++)
            {   
                if (text1[j - t.length + 1 + i] != t[i])
                {
                    flag = true;
                    break;
                }
            }
            if (!flag) stack1.push(j - t.length + 1);
        }
    }
console.log(stack1);
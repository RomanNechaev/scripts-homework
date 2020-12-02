let fs = require('fs');
let arg = process.argv;
let stack = new Array();
let text1 = fs.readFileSync('описание дуба.txt');
text1 = text1.toString();
let t = "дуб";
    let flag;
    for (let i = 0; i < text1.length - t.length + 1; i++)
    {   
        flag = false;
        for (let j = 0; j < t.length; j++)
        {
            if (text1[i + j] != t[j])
            {
                flag = true;
                break;
            }
        }
        if (flag) continue;
        stack.push(i);
    }
console.log(stack);





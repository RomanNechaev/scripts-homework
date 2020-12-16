var alphabet = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ ,.!—";
var alphabet1='абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync('input.txt');
text = text.toString();
let step = parseInt(fs.readFileSync('step.txt', {encoding: 'utf8'}));

let canonfreq = [0.0801,0.0159,0.0454,0.017,0.0298,0.0845,0.0004,0.0094,0.0165,0.0735,0.0121,0.0349,0.044,0.0321,0.067,0.1097,0.0281,0.0473,0.0547,0.0626,0.0262,0.0026,0.0097,0.0048,0.0144,0.0073,0.0036,0.0004,0.019,0.0174,0.0032,0.0064,0.0201];
function code(text)
{
	let code1 = "";
	for(let i=0;i<text.length;i++)
		for(let j=0;j<alphabet.length;j++)
			if (text[i]==alphabet[j])
				code1+=(alphabet[(j+step)%alphabet.length]);
	return code1;
}
fs.writeFileSync('code.txt',code(text));

let codes = fs.readFileSync('code.txt');
codes = codes.toString();

function freq(text)
{
	let stackfreq = new Array();
	for(let j=0;j<alphabet1.length;j++)
	{
		stackfreq[j]=0;
	}
	let k=0;
	for(let i =0;i<text.length;i++)
	{
		if (alphabet1.indexOf(text[i])>-1)
		{
			k++;
			stackfreq[alphabet1.indexOf(text[i])]++;
		}
	}
	for(let i=0;i<stackfreq.length;i++)
	{
		stackfreq[i] = stackfreq[i]/k;
	}
	return stackfreq;
}

function hack()
{
	let freq1 = freq(codes.toLowerCase());
    let mN = 100000000;
    let mNindex = -1;
    for (let step = 0; step < alphabet1.length; step++){
        let k = 0;
        for (let i = 0; i < alphabet1.length; i++){
            k += (canonfreq[i] - freq1[(i+step) % alphabet1.length])**2;
        }
        if (k < mN){
            mN = k;
            mNindex = step;
        }
    }
    return mNindex;
}

function decode(text)
{
	let step1 = hack();
	let code1 = "";
	for(let i=0;i<codes.length;i++)
		for(let j=0;j<alphabet.length;j++)
			if (codes[i]==alphabet[j])
				code1+=(alphabet[(j-step1+alphabet.length)%alphabet.length]);
	return code1;
}
fs.writeFileSync('decode.txt',decode(codes));

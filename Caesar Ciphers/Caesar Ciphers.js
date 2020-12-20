var alphabet = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ,.!-?";
var alphabet1='абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync('input.txt');
text = text.toString();
let step = parseInt(fs.readFileSync('step.txt', {encoding: 'utf8'}));
let hash  = {'а': 0, 'б': 1, 'в': 2, 'г': 3, 'д': 4, 'е': 5,
    'ё': 6, 'ж': 7, 'з': 8, 'и': 9, 'й': 10, 'к': 11,
    'л': 12, 'м': 13, 'н': 14, 'о': 15, 'п': 16, 'р': 17,
    'с': 18, 'т': 19, 'у': 20, 'ф': 21, 'х': 22, 'ц': 23,
    'ч': 24, 'ш': 25, 'щ': 26, 'ь': 27, 'ы': 28, 'ъ': 29,
    'э': 30, 'ю': 31, 'я': 32, ' ': 33, 
    'А': 34, 'Б': 35, 'В': 36, 'Г': 37, 'Д': 38, 'Е': 39,
    'Ё': 40, 'Ж': 41, 'З': 42, 'И': 43, 'Й': 44, 'К': 45,
    'Л': 46, 'М': 47, 'Н': 48, 'О': 49, 'П': 50, 'Р': 51,
    'С': 52, 'Т': 53, 'У': 54, 'Ф': 55, 'Х': 56, 'Ц': 57,
    'Ч': 58, 'Ш': 59, 'Щ': 60, 'Ь': 61, 'Ы': 62, 'Ъ': 63,
    'Э': 64, 'Ю': 65, 'Я': 66, ',': 67, '.': 68, '!': 69,
    '-': 70};
let canonfreq = [0.0801,0.0159,0.0454,0.017,0.0298,0.0845,0.0004,0.0094,0.0165,0.0735,0.0121,0.0349,0.044,0.0321,0.067,0.1097,0.0281,0.0473,0.0547,0.0626,0.0262,0.0026,0.0097,0.0048,0.0144,0.0073,0.0036,0.0004,0.019,0.0174,0.0032,0.0064,0.0201];
let keys = Object.keys(hash);
let t = ""
function code(text)
{
	let code1 = "";
	for(let i=0;i<text.length;i++)
			code1+=(alphabet[(hash[text[i]]+step)%alphabet.length]);
	return code1;
}
console.log(t);
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
			k++;
			stackfreq[hash[text[i]]]++;
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
    let mN = Number.MAX_VALUE;
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
		code1+=(alphabet[(hash[text[i]]-step1+alphabet.length)%alphabet.length]);
	return code1;
}
fs.writeFileSync('decode.txt',decode(codes));

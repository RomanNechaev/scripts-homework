var alphabet = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ ,.!—";
let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync('input.txt');
text = text.toString();


let step = parseInt(fs.readFileSync('step.txt', {encoding: 'utf8'}));


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

function decode(text)
{
	let code1 = "";
	for(let i=0;i<codes.length;i++)
		for(let j=0;j<alphabet.length;j++)
			if (codes[i]==alphabet[j])
				code1+=(alphabet[(j-step+alphabet.length)%alphabet.length]);
	return code1;
}
fs.writeFileSync('decode.txt',decode(codes));

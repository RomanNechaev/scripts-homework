let fs = require('fs');
let inText;
inText = fs.readFileSync('input.txt');
inText = inText.toString();
let alph = new Array();
let i;
for(i=0;i<inText.length;i++)
{
	alph[inText.charAt(i)] = 0;
}
for(i=0;i<inText.length;i++)
{
	alph[inText.charAt(i)] ++;
}
let h = 0;
let n = 0
for  (i in alph) {
	alph[i] /= inText.length;
	n++
}
if (n>1) {
	for (let i in alph) {
		h -= alph[i] * Math.log2(alph[i])
	}
	h/= Math.log2(n);
	console.log(h);
}
if (inText==''){
	console.log('Файл пустой!')
}	
else
{
	console.log(1);
}

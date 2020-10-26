function codeStr(inText){
	let i = 0, n = 1;
	let resStr = '';
	while (i < inText.length){
		while(inText.charAt(i) == inText.charAt(i + n))
			n++;
		nJump = n;
		while( n >= 127){
			resStr += '#' + String.fromCharCode(127) + inText.charAt(i);
			n -= 127;
		}
		if ((n > 3) || (inText.charAt(i) == '#'))
			resStr += '#' + String.fromCharCode(n) + inText.charAt(i)
		else
			for(k = 0; k < n; k++)
				resStr += inText.charAt(i);
		i += nJump;
		n = 1;
	}
	return resStr;
}
function decodeStr(Intext) {
	let alph = '';
	for (let i = 0; i <= 255; i++)
		alph += String.fromCharCode(i);
	let i = 0
	let resStr = '';
	while (i < inText.length){
		if (inText[i] == '#'){
			let count =alph.indexOf(inText[i + 1]);
			for (let k = 0; k < count; k++)
				resStr += inText[i + 2];
			i += 2;
		} else 
			resStr += inText[i];
		i++;
	}
	return resStr;
};
let fs = require('fs');
let file = fs.readFileSync(process.argv[3], 'utf8');
let outFile = process.argv[4];
let outString;
if (process.argv[2] == 'code')
	outString = codeStr(file);
else if (process.argv[2] == 'decode')
	outString = decodeStr(file);
else
	console.log('Function not found');
fs.writeFileSync(outFile, outString);




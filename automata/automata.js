let fs = require('fs');
str = fs.readFileSync('input.txt');
str = str.toString();
substring=fs.readFileSync('substring.txt');
substring=substring.toString();
m=substring.length;
let alph=new Array();

// Автомат
for(i=0;i<m;i++)
	alph[substring.charAt(i)]=0;

del=new Array(m+1)
for(j=0;j<=m;j++)
	del[j]=new Array();

for(i in alph)
	del[0][i]=0;

for(j=0;j<m;j++){
	prev=del[j][substring.charAt(j)]
	del[j][substring.charAt(j)]=j+1
	for(i in alph)
		del[j+1][i]=del[prev][i]
}
for(j=0;j<=m;j++){
	out=''
for(i in alph)
	out+=del[j][i]+' '
	console.log(out)
};
// Индексы вхождения
let ind = new Array();
let c = 0;
for (i =0; i < str.length; i++){
	let symbol = str[i]
	for (let symbol1 in alph){
		if (symbol == symbol1) 
			c = del[c][symbol]
	}
	if (c == m)
		ind.push(i-m+1)
}
console.log(ind)
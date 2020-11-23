let fs = require('fs');
let arg = process.argv;
let readlineSync = require('readline-sync');
let mem = new Array();
let text = fs.readFileSync(arg[2]);
text = text.toString();
mem = text.split(/\r\n| /);
for(let i=0;i<mem.length;i++)
	console.log(i,mem[i]);
ip=0;
flag = true;
while(flag)
	switch(mem[ip]){
		case 'input':
			let number = readlineSync.question('Введите значение ');
			mem[mem[ip+1]]= parseFloat(number)
			ip+=2;
			break;
		case 'set':
			mem[mem[ip+1]] = parseFloat(mem[ip+2]);
			ip+=3;
			break;
		case 'output':
			console.log(mem[mem[ip+1]])
			ip+=2;
			break;
		case 'add':
			mem[mem[ip+3]]=mem[mem[ip+1]]+mem[mem[ip+2]];
			ip+=4;
			break;
		case 'subtraction':
			mem[mem[ip + 3]] = mem[mem[ip + 1]] - mem[mem[ip + 2]];
			ip += 4;
			break;
		case 'multiply': 		
			mem[mem[ip + 3]] = mem[mem[ip + 1]] * mem[mem[ip + 2]];
			ip += 4;
			break;
		case 'integerDivision':
			mem[mem[ip + 3]] = Math.floor(mem[mem[ip + 1]] / mem[mem[ip + 2]]);
			ip += 4;
			break;
		case 'equal':
			if(mem[ip[i + 1]] == mem[ip[i + 2]]) 
				mem[ip[i + 3]] = 1;
			else 
				mem[ip[i + 3]] = 0;
			i += 4;
			break;
		case 'remainderDivision':
			if(mem[mem[ip+2]]!=0)
			{
				mem[mem[ip + 3]] = mem[mem[ip + 1]] % mem[mem[ip + 2]];
				mem[mem[ip + 1]] = mem[mem[ip + 2]];
				mem[mem[ip + 2]] = mem[mem[ip + 3]];
				ip += 5;
			}
			else 
				ip = parseFloat(mem[ip + 4]);
			break;
		case 'jmpBack':
			ip = parseFloat(mem[ip+1]);
			break;
		case 'jmpIfNotZero':
			if (mem[mem[ip + 1]] != 0)
				ip+=3;
			else 
				ip = parseFloat(mem[ip + 2]);
			break;
		case 'exit':
			flag=false;
}


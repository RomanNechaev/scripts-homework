let str = "1+2*3/4^5^6-(7-8)*9";
let out = new Array();
let stek = new Array();
function priority(symbol){
	switch(symbol)
	{
		case '(':
			return 1
			break;
		case ')':
			return 1
			break;
		case '+':
			return 2
			break;
		case '-':
			return 2
			break;
		case '*':
			return 3
			break;
		case '/':
			return 3
			break;
		case '^':
			return 4
			break;
		default:
			return 0;
	}
}
for (let i = 0; i < str.length; i++){
	if (priority(str[i]) == 0)
		out.push(str[i]);
	else if (str[i] == '(')
		stek.push('(');
	else if (str[i] == ')'){
		while (stek[stek.length-1] != '(')
			out.push(stek.pop());
		stek.pop();
	}
	else if (str[i] == '^' && stek[stek.length-1]=='^') {
		stek.push('^');
	}
	else {
		while (priority(str[i]) <= priority(stek[stek.length-1]))
			out.push(stek.pop());
		stek.push(str[i]);
	}
}
stlen = stek.length;
if (stlen > 0){
	for (i = 0; i < stlen; i++){
		out.push(stek.pop());
	}
}
console.log(out.join(''))
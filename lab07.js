function isNumber(number) {
	if (isNaN(number) === false) {
		if (number%2 === 0) {
				alert("Число парне");
		}
		else {
				alert("Число непарне");
		}
	}
	else {
		alert("");
	}
}
console.log(isNumber(17));


function isPr (value) {
	if (value == 1 || value === 0) {
		return false;
	}

	else {
	for (var i = 2; i < value; i++) {

		if ( value % i === 0){
				return false;
		}
	}
	return true;
}
console.log(isPr());

}
function sumPr() {
	var inf = 2;
	var sum = 0;
	var arr = [];
	for (var i = 1; i < inf; i++) {
		if (isPr(i)) {
				arr.push(i);
				sum += i;
		}
		if (arr.length == 5) {
			return sum;
				
		}
		inf++;
	}
}
console.log(sumPr());


function sumRet (n) {
	var sum = 0, num = 1;
	for (var i = 1; i <= n; i++) {
		sum += num;
		num = num*10 + 1;
	}
	return sum; 
}
console.log(sumRet(5));



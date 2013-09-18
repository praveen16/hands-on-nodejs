function fib(n){
	if(n<2){
		return n;
	}else{
		return fib(n-2)+fib(n-1);
	}
}
console.log('fib(0) is ',fib(0));   //  0
console.log('fib(2) is ',fib(2));   //  1
console.log('fib(5) is ',fib(5));   //  5
console.log('fib(10) is ',fib(10)); // 55


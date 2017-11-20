// Циклы
// 1
var p = document.getElementById('out');
for (var i = 4; i <= 400; i = i + 1){
	p.innerHTML += i + ' ';  
}
// 2
var p = document.getElementById('out2');
for (var i = 4; i <= 13; i = i + 3){
	p.innerHTML += i + '<br>';  
}
// 3
var p = document.getElementById('out3');
for (var i = 654; i >= 0; i = i - 1){
	p.innerHTML += i + ' ';  
}
// 4
var p = document.getElementById('out4');
for (var i = 1983; i <= 2017; i = i + 1){
	p.innerHTML += i + ' ';  
}
// 5
var p = document.getElementById('out5');
for (var i = -4; i <= 100; i = i + 2){
	p.innerHTML += i + ' ';  
}
// Массивы
// 1
var mas = [3, 6, 1, 13, 88, 43];
console.log(mas[0]);
console.log(mas[3]);
// 2
var m = ['Hi', "hello", 34, "prima"];
console.log(m[1]);
console.log(m[3]);
// 3
var l = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
console.log(l.length);
// 4
var n = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
n[3] = 'new element';
console.log(n);
// 5
var n = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
n[2] = '22';
n[4] = '44';
console.log(n);
// 6
var t = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
t[10] = '100';
console.log(t);
// 7
var q = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
q[12] = '200';
console.log(q);
console.log(q[11]);
// 8
var arr = [31, 24, 35, 47, 12];
console.log(arr[3]);
console.log(arr[60]);
// 9
var arrr = [31, 24, 35, 47, 12];
// var f = 1;
// var f = 4;
var f = 7;
console.log(arrr[f]);

// 10
var aarr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
var i = 1;
// var i = 2;
// var i = 3;
// var i = 4;
// var i = 5;
console.log(aarr[i]);
// 11
var man = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
document.getElementById('btn').onclick = f11;
function f11(){
	var u = document.getElementById('inp').value;
	console.log(man[u]);
}
// 12
var p = document.getElementById('out12');
var aaarr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var h=0; h<aaarr.length; h++){
	p.innerHTML += aaarr[h]+' ';
}
// 13
var pp = document.getElementById('out13');
var abc = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var l=abc.length-1; l>=0; l--){
	pp.innerHTML += abc[l]+' ';
}
// Вложенные массивы
// 14
arr = [2, 3, [4,5]];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
// 15
console.log(arr[2][0]);
console.log(arr[2][1]);
// 16
console.log(arr[2].length);
// 17
arr = [ 2, [3,4,5], [6,7,8] ];
console.log(arr[1][1]);
console.log(arr[2][2]);
// 18
console.log(arr[2]);
console.log(arr[0]);
// 19
arr = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14] ];
console.log(arr[2]);
// 20
arr = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto'] ];
console.log(arr[1][0]);
console.log(arr[0][2]);


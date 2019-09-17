//задание 20
let i = 1;
while (i <= 100) {
    alert(i);
    i++;
}
;

for (i = 1; i <= 100; i++) {
    alert(i);
}
;

//задание 21
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
;

//задание 22
let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        alert('Есть!');
        break;
    }
}
;

//задание 23
const arr = [
    2, 5, 9, 15, 0, 4
];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}
;


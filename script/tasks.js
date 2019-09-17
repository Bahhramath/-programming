//задание 15
let day = 1;//первая декада
if (day <= 10) {
    alert('Первая декада');
}
if (day > 10 && day <= 20) {
    alert('Вторая декада');
}
if (day > 20 && day <= 31) {
    alert('Третья декада');
}
;

//задание 16
let str = 'abcde';
if (str[0] == 'a') {
    alert('да');
} else {
    alert('нет');
}
;

//задание 17
let num = '12345';
if (num[0] == '1' || num[0] == '2' || num[0] == '3') {
    alert('да');
} else {
    alert('нет');
}
;

//задание 18
let num = '465';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
alert(sum);

//задание 19
let num = '465123';
let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5])
if (sum1 == sum2) {
    alert('да');
} else {
    alert('нет')
}
;
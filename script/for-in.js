// задание 24
let obj = {
    green: 'зеленый', red: 'красный', blue: 'голубой'
};

for (let key in obj) {
    alert(key);
    alert(obj[key]);
}
;

// задание 25
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for (let key in obj) {
    alert(key + ' - зарплата ' + obj[key] + ' долларов');
}
;

let arr = [1, 2, 3, 4, 5];
alert(arr);//первый способ создания массива arr

let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
alert(arr);//второй способ создания массива arr

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(a[1][0]); //4

const daysOfTheWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
alert(daysOfTheWeek['ru'][0]);//понедельник
alert(daysOfTheWeek['en'][2]);//Wednesday

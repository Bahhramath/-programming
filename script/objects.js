let obj = {'Петя': '100 руб', 'Коля': '101 руб'};
alert(obj['Петя']);//100 руб
alert(obj['Коля']);//101 руб

const daysOfTheWeek = {
    '1': 'понедельник',
    '2': 'вторник',
    '3': 'среда',
    '4': 'четверг',
    '5': 'пятница',
    '6': 'суббота',
    '7': 'воскресенье'
};
alert(daysOfTheWeek['7']);//текущий день - воскресенье
let day = 7;
alert(daysOfTheWeek[day]);//7-ой день - воскресенье

const obj = {
    js: ['jQuery', 'Angular'], php: 'hello', css: 'world'
};
//alert( obj['js'][0]);
alert(obj['js'] = 'jQuery');


let user = {};// пустой объект user.
user.name = 'John';//свойство name со значением John
alert(user.name);//John
user.surname = 'Smith';//свойство surname со значением Smith
user.name = ' Pete';//изменено значение свойства name на Pete
alert(user.name);//Pete
delete user.name; //удалено свойство name из объекта


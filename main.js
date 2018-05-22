//С помощью promt, getElementById написать страничку, которая запрашивает пользователя имя и возраст. Если возраст в диапазоне от 1 до 23 - выводим сообщение Имя, вам еще учиться, с 24 до 65 - Имя, вам еще работать, с 65 - Имя, вам пора на пенсию. Для проверки возраста использовать switch .. case

var name = prompt("What's your name?");
var years = prompt('How old are you?');


var msg = document.getElementById('msg');
switch (true) {
        
    case years>=1 && years<=23: msg.innerHTML=(name+' Вам еще учиться');break;
    case years>=24 && years<=65: msg.innerHTML=(name+', Вам еще работать');break;
    case years>65: msg.innerHTML=(name+', Вам пора на пенсию');break;
    default:  alert('Некоррекно указан возраст');

    
}


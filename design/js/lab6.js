function time() {
let time=prompt("Ввод времени в формате HH:MI (часы:минуты)",'');
let hour=time.split(':');
let min=parseInt(hour[1]);
hour=parseInt(hour[0]);
if (min>60){
    alert("Некорректные данные!");
    return;}

switch(hour){
    case 8:
    case 9:
    case 10:
    case 11:
    case 7:alert("УТРО"); break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16: alert("ДЕНЬ"); break;

    case 17:
    case 18:
    case 19:
    case 20:alert("ВЕЧЕР"); break;

    case 21:
    case 22:
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: alert("НОЧЬ"); break;

    default: alert("Некорректные данные!");
}
}
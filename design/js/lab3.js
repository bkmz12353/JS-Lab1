function getRandomInt()
{
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
}
function  textov() {
    let nem=getRandomInt();
    let  a = prompt("Введите текст размером не менее " + nem , '');
    if(a.length<nem){
        alert("Количество символов меньше заданного");
        return;
    }
    let nem2=Math.round(nem/3);
    let  b = prompt("Введите текст размером не менее " + nem2 +" и не более "+ nem, '');
    if(b.length<nem2 || b.length>nem ){
        alert("Количество символов не соответствует условиям");
        return;
    }
    if(a.indexOf(b) + 1) {

        alert("Вхождение есть! Индекс вхождения: "+a.indexOf(b));

    }
    else{alert("Вхождения нет");}

}
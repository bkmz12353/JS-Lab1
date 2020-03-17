function sravnenie() {
    let  a = prompt("Введите значение a", '');
    let b = prompt("Введите значене b", '');
    if (a == b) {
        result = 'значения равны';
    }
    else
    {
        result = 'значения не равны';
    }
    alert(result);
}
function sravnenie2() {
    let  a = prompt("Введите значение a", '');
    let b = prompt("Введите значене b", '');
    (a == b)?result = 'значения равны':result = 'значения не равны';

    alert(result);
}
function alerter() {
    let num = prompt("Введите число (от 15 до 90)", '');
    if(num==null){return;}
    let text=prompt("Введите строку(не менее 15 символов)", '');
    if(text==null){return;}
    while(num<15 | num>90 | text.length<10)
    {
        num = prompt("Повторите ввод числа(от 15 до 90)", '');
        if(num==null){return;}
        text = prompt("Повторите ввод строки(не менее 15 символов)", '');
        if(text==null){return;}
    }
}